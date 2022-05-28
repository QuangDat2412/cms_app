import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
const TableCustom = ({ type, openMoDalAdd }) => {
    const uploadImage = () => {
        let inputTag = document.createElement('input');
        inputTag.type = 'file';
        inputTag.accept = 'image/png, image/jpeg';
        inputTag.onchange = (_this) => {
            let files = _this.target.files;
            this.shareService
                .upload(files, this.folder)
                .then((res) => {})
                .catch((e) => {
                    console.log(e);
                });
        };
        inputTag.click();
    };
    return (
        <>
            <div className={('box-img', type == 'thumbnail' ? 'thumbnail' : 'avatar')}>
                <div className="img">
                    {type == 'thumbnail' ? (
                        <img onError="this.src='assets/default.png'" alt="" />
                    ) : (
                        <img onError="this.src='assets/default-avatar.png'" alt="" />
                    )}
                </div>
                <div className="caption" onClick={uploadImage}>
                    <div className="file-input-wrapper">
                        <div className="btn-file-input">
                            <svg cIcon name="cilPlus" size="lg"></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
TableCustom.propTypes = {
    type: PropTypes.string,
    openMoDalAdd: PropTypes.func,
};
export default TableCustom;
