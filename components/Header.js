import React, {useEffect, useState} from 'react';
import Modal from './Modal';


function Header(props) {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
        <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-textColor'>
            <h1 className='text-3xl sm:text-6xl select-none'>ENVI</h1>
            <i onClick={() => setOpenModal(true)} className="fa-solid fa-bars text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"></i>
        </div>
        </>
    );
}

export default Header;