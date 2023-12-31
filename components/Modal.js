import { useAuth } from '@/context/AuthContext';
import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom'

function Modal(props) {
    const { setOpenModal } = props
    const [ _document, set_document] = useState(null)
    const {logout, currentUser} = useAuth()

    useEffect(() => {
        set_document(document)
    }, [])
    
    if (!_document ) {return null}

    return ReactDom.createPortal(
        <div className='fixed w-screen h-screen top-0 left-0 bg-white text-textColor flex text-lg sm:text-2xl flex-col'>
            <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
                <h1 className='font-semibold text-2xl sm:text-5xl select-none'>MENU</h1>
                <i onClick={() => setOpenModal(false)} class="fa-solid fa-xmark duration-300 hover:rotate-90 cursor-pointer text-lg sm:text-3xl"></i>
            </div>
            <div className='p-4 flex flex-col gap-3'>
                <a className='select-none duration-300 hover:pl-2 cursor-pointer inline-block' href="https://opms.emb.gov.ph/accounts/login/">EMB Online Permitting and Monitoring System</a>
                <a className='select-none duration-300 hover:pl-2 cursor-pointer inline-block' href="https://emb.gov.ph/">DENR EMB</a>
                
                {currentUser && (
                    <h2 onClick={() => {
                        logout();
                        setOpenModal(false);
                    }} className='select-none duration-300 hover:pl-2 cursor-pointer inline-block'>Logout</h2>
                )}
            </div>
        </div>,
        _document.getElementById('portal')
    );
}

export default Modal;