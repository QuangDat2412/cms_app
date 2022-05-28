import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { courseActions, courseSelector } from 'src/redux/course/course.slice';
import {
    CCol,
    CRow,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
    CTable,
    CTableBody,
    CTableRow,
    CTableDataCell,
} from '@coreui/react';
import {
    CFormLabel,
    CForm,
    CModalTitle,
    CModalHeader,
    CModalBody,
    CModal,
    CButton,
    CFormInput,
    CModalFooter,
    CFormSelect,
    CFormFeedback,
} from '@coreui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './index.scss';
const CourseDetail = () => {
    const currentLocation = useLocation().pathname;
    const code = currentLocation.split('/')[2];
    const dispatch = useDispatch();
    const course = useSelector(courseSelector.course);
    useEffect(() => {
        if (code) {
            dispatch(courseActions.getCourseByCode({ code: code }));
        }
    }, [dispatch, code]);
    const lessonForm = { name: '', topicId: '', description: '', image: '', code: [], url: '' };
    const [inputs, setInputs] = useState({ ...lessonForm });
    const [visible, setVisible] = useState(false);
    const [lesson, setLesson] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [validated, setValidated] = useState(false);
    const [actionType, setActionType] = useState('');
    const handleChange = useCallback((e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);
    const openMoDalView = (lesson) => {
        setLesson(lesson);
        setVisible1(true);
    };
    const openMoDalAdd = (lesson, type, id) => {
        if (type === 'update') {
            const _lesson = { ...lesson };
            setInputs(_lesson);
        } else if (type === 'add') {
            setInputs({ ...lessonForm, code: makeCode(6), topicId: id });
        }
        setActionType(type);
        setVisible(true);
    };
    const saveCourse = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            Promise.resolve(dispatch(courseActions.saveLesson(inputs)))
                .then((data) => {
                    closeModal();
                    dispatch(courseActions.getCourseByCode({ code: code }));
                })
                .catch(() => {});
        }
        setValidated(true);
    };
    const closeModal = () => {
        setValidated(false);
        setVisible(false);
    };
    const makeCode = (n) => {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        for (var i = 0; i < n; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };
    const listTopics = course.listTopics || [];
    return (
        <>
            <CRow xs={{ gutterX: 2, gutterY: 2 }}>
                <CCol lg={6}>
                    <h4>{course.name}</h4>
                </CCol>
                <CCol lg={12}>
                    <CAccordion activeItemKey={0}>
                        {listTopics.map((t, i) => {
                            return (
                                <CAccordionItem itemKey={i} key={i}>
                                    <CAccordionHeader>{t.name}</CAccordionHeader>
                                    <CAccordionBody>
                                        <CTable cTable hover class="mb-0">
                                            <CTableBody>
                                                {t.listLessons.map((l, i) => {
                                                    return (
                                                        <CTableRow key={i}>
                                                            <CTableDataCell className="btn-lesson" style={{ width: '83%' }}>
                                                                {l.name}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="btn-lesson">
                                                                <CButton
                                                                    color="warning"
                                                                    onClick={() => {
                                                                        openMoDalView(l);
                                                                    }}
                                                                >
                                                                    Xem bai hoc
                                                                </CButton>
                                                                <CButton
                                                                    onClick={() => {
                                                                        openMoDalAdd(l, 'update', t._id);
                                                                    }}
                                                                    className="ms-2"
                                                                >
                                                                    Chinh sua
                                                                </CButton>
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                    );
                                                })}
                                            </CTableBody>
                                        </CTable>
                                        <CButton
                                            color="warning"
                                            onClick={() => {
                                                openMoDalAdd({}, 'add', t._id);
                                            }}
                                            className="mt-3"
                                        >
                                            Thêm bài học
                                        </CButton>
                                    </CAccordionBody>
                                </CAccordionItem>
                            );
                        })}
                    </CAccordion>
                </CCol>
            </CRow>
            <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{actionType === 'add' ? 'Thêm mới bài học' : 'Chỉnh sửa bài học'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={saveCourse}>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Tên bài học</CFormLabel>
                            <CFormInput type="text" label="Tên khóa học" required name="name" onChange={handleChange} value={inputs.name} />
                            <CFormFeedback invalid>Vui lòng nhập tên bài học.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Code</CFormLabel>
                            <CFormInput type="text" label="Code" required name="code" disabled={true} value={inputs.code} />
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Link bài học</CFormLabel>
                            <CFormInput type="text" label="Code" required name="url" onChange={handleChange} value={inputs.url} />
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
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                Đóng
                            </CButton>
                            <CButton color="success" type="submit">
                                Lưu lại
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
            <CModal visible={visible1} onClose={() => setVisible1(false)} size="lg">
                <CModalHeader onClose={() => setVisible1(false)}>
                    <CModalTitle>Bai hoc</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <div className="player-doc">
                        <div className="player">
                            <iframe width="100%" height="100%" src={lesson.url}></iframe>
                        </div>
                    </div>
                </CModalBody>
            </CModal>
        </>
    );
};

export default CourseDetail;
