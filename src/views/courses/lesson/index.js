/* eslint-disable eqeqeq */
import React, { useState, useCallback, useEffect } from 'react';
import Filter from './Filter';
import {
    CFormLabel,
    CForm,
    CModalTitle,
    CModalHeader,
    CModalBody,
    CModal,
    CButton,
    CFormInput,
    CCol,
    CModalFooter,
    CFormSelect,
    CCard,
    CCardBody,
    CFormFeedback,
} from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { courseActions, courseSelector } from 'src/redux/course/course.slice';
import { lessonActions, lessonSelector } from 'src/redux/lesson/lesson.slice';
import TableCustom from 'src/components/table';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import UploadVideo from '../../../components/uploadVIdeo';
const Lessons = () => {
    const lessonForm = { name: '', topicId: '', description: '', image: '', code: [], url: '', time: 500 };
    const [inputs, setInputs] = useState({ ...lessonForm });
    const filterForm = { name: '', courseId: '0', topicId: '0' };
    const [filter, setFilter] = useState(filterForm);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(courseActions.getCourse({ name: '', status: 1 }));
    }, [dispatch]);
    useEffect(() => {
        if (filter.courseId != '0') {
            dispatch(lessonActions.getLesson(filter));
        }
    }, [filter, dispatch]);
    const [_topics, set_Topics] = useState([]);
    const [__topics, set__Topics] = useState([]);
    const courses = useSelector(courseSelector.courses);
    const lessons = useSelector(lessonSelector.lessons);
    useEffect(() => {
        if (courses[0]?._id) {
            setFilter((prev) => {
                return { ...prev, courseId: courses[0]?._id };
            });
            set_Topics(courses[0]?.listTopics || []);
        }
    }, [courses]);
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [actionType, setActionType] = useState('');
    const handleChange = useCallback(
        (e) => {
            setInputs((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
            });
            if (e.target.name === 'courseId') {
                const _c = courses.find((c) => {
                    return c._id === e.target.value;
                });
                set__Topics(_c?.listTopics || []);
            }
        },
        [courses],
    );
    const makeCode = (n) => {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (var i = 0; i < n; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    const openMoDalAdd = (lesson, type) => {
        if (type === 'update') {
            const _lesson = { ...lesson };
            const _c = courses.find((c) => {
                return c._id === _lesson.courseId;
            });
            set__Topics(_c.listTopics);
            setInputs(_lesson);
        } else if (type === 'add') {
            setInputs({ ...lessonForm, code: makeCode(6), courseId: courses[0]._id });
            set__Topics(courses[0].listTopics);
        }
        setActionType(type);
        setVisible(true);
    };
    const deleteL = (obj) => {
        Promise.resolve(dispatch(lessonActions.deleteLesson(obj)))
            .then((data) => {
                dispatch(lessonActions.getLesson(filter));
            })
            .catch(() => {});
    };
    const data = {
        data: lessons.map((l, i) => ({ ...l, index: i + 1, courseName: l.course?.name, topicName: l.topic?.name })),

        header: [
            {
                dataIndex: 'index',
                title: 'STT',
            },
            {
                dataIndex: 'name',
                title: 'Tên chủ đề',
            },
            {
                dataIndex: 'courseName',
                title: 'Khoá học',
            },
            {
                dataIndex: 'topicName',
                title: 'Chủ đề',
            },
            {
                dataIndex: 'time',
                title: 'Thời lượng',
            },
            {
                dataIndex: '',
                title: 'Mô tả',
                render: (a, b) => {
                    return (
                        <>
                            <span dangerouslySetInnerHTML={{ __html: b.description }} className="wrapword"></span>
                        </>
                    );
                },
            },
            {
                title: 'Hoạt động',
                dataIndex: '',
                key: 'x',
                render: (a, b) => {
                    return (
                        <>
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    openMoDalAdd(b, 'update');
                                }}
                                className="mx-2"
                                href="/"
                            >
                                Chỉnh sửa
                            </a>
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteL(b);
                                }}
                                className="mx-2"
                                href="/"
                            >
                                Xóa
                            </a>
                        </>
                    );
                },
            },
        ],
    };
    const handleChangeFilter = useCallback(
        (e) => {
            if (e.target.name === 'courseId') {
                setFilter((prev) => {
                    return { ...prev, courseId: e.target.value, topicId: '0' };
                });
                const _c = courses.find((c) => {
                    return c._id === e.target.value;
                });
                set_Topics(_c?.listTopics || []);
            } else {
                setFilter((prev) => {
                    return { ...prev, [e.target.name]: e.target.value };
                });
            }
        },
        [courses],
    );
    const saveCourse = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            Promise.resolve(dispatch(lessonActions.saveLesson(inputs)))
                .then((data) => {
                    dispatch(lessonActions.getLesson(filter));
                    closeModal();
                })
                .catch(() => {});
        }
        setValidated(true);
    };
    const closeModal = () => {
        setValidated(false);
        setVisible(false);
    };
    const setUrl = (e) => {
        setInputs((prev) => {
            return { ...prev, url: e.url, time: e.duration };
        });
    };
    return (
        <>
            <CCard>
                <CCardBody>
                    <Filter openMoDalAdd={openMoDalAdd} handleChangeFilter={handleChangeFilter} courses={courses} topics={_topics} />
                    <TableCustom datas={data} />
                </CCardBody>
            </CCard>
            <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{actionType === 'add' ? 'Thêm mới bài học' : 'Chỉnh sửa bài học'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={saveCourse}>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Code</CFormLabel>
                            <CFormInput type="text" label="Code" required name="code" disabled={true} value={inputs.code} />
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Tên bài học</CFormLabel>
                            <CFormInput type="text" label="Tên khóa học" required name="name" onChange={handleChange} value={inputs.name} />
                            <CFormFeedback invalid>Vui lòng nhập tên bài học.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Khóa học</CFormLabel>
                            <CFormSelect required name="courseId" onChange={handleChange} value={inputs.courseId}>
                                {courses.map((t) => {
                                    return (
                                        <option value={t._id} key={t._id}>
                                            {t.name}
                                        </option>
                                    );
                                })}
                            </CFormSelect>
                            <CFormFeedback invalid>Vui lòng chọn khóa học.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Chủ đề</CFormLabel>
                            <CFormSelect required name="topicId" onChange={handleChange} value={inputs.topicId}>
                                <option value="">Chọn Chủ đề</option>
                                {__topics.map((t) => {
                                    return (
                                        <option value={t._id} key={t._id}>
                                            {t.name}
                                        </option>
                                    );
                                })}
                            </CFormSelect>
                            <CFormFeedback invalid>Vui lòng chọn khóa học.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Upload Video</CFormLabel>
                            <UploadVideo setInfo={setUrl} />
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Thời lượng</CFormLabel>
                            <CFormInput type="number" label="Code" required name="time" onChange={handleChange} value={inputs.time} disabled />
                        </CCol>
                        <CCol lg="12">
                            <CFormLabel htmlFor="validationServerUsername">Mô tả</CFormLabel>
                            <CKEditor
                                editor={ClassicEditor}
                                data={inputs.description}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setInputs((prev) => {
                                        return { ...prev, description: data };
                                    });
                                }}
                            />
                        </CCol>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)} className="btn-modal">
                                Đóng
                            </CButton>
                            <CButton color="warning" type="submit" className="btn-modal">
                                Lưu lại
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
};

export default Lessons;
