import { useState } from 'react';
import {
    ButtonOpenCloseMenuMobile,
    FilterDesctop,
    FilterMobile,
    LogoMenu,
} from '../../../features';

export const Filter = () => {
    const [isShow, setShow] = useState<boolean>(false);

    return (
        <div className="flex">
            {/* Desctop menu*/}
            <FilterDesctop />

            {/* Mobile show*/}
            <div className="flex justify-between lg:hidden">
                <ButtonOpenCloseMenuMobile
                    cb={() => setShow(!isShow)}
                    isShow={isShow}
                />
            </div>

            {isShow && (
                <FilterMobile cb={setShow}>
                    <LogoMenu />
                    <ButtonOpenCloseMenuMobile
                        cb={() => setShow(!isShow)}
                        isShow={isShow}
                    />
                </FilterMobile>
            )}
        </div>
    );
};
