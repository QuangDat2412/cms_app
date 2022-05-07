import React from 'react';
import { CAvatar, CBadge, CDropdown, CDropdownDivider, CDropdownHeader, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import { cilLockLocked, cilSettings, cilTask, cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useSelector } from 'react-redux';
import { authSelector } from 'src/redux/auth/auth.slice';
import avatar8 from 'src/assets/images/avatars/8.jpg';

const AppHeaderDropdown = () => {
    const currentUser = useSelector(authSelector.currentUser);
    const { avatar, fullName } = currentUser;
    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
                <CAvatar src={avatar} size="md" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
                <CDropdownItem href="#">
                    <CIcon icon={cilUser} className="me-2" />
                    {fullName}
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilSettings} className="me-2" />
                    Settings
                </CDropdownItem>
                {/* <CDropdownItem href="#">
                    <CIcon icon={cilCreditCard} className="me-2" />
                    Payments
                    <CBadge color="secondary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilFile} className="me-2" />
                    Projects
                    <CBadge color="primary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem> */}
                <CDropdownDivider />
                <CDropdownItem href="#">
                    <CIcon icon={cilLockLocked} className="me-2" />
                    Log Out
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
};

export default AppHeaderDropdown;
