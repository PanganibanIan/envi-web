import React from 'react'

export default function DataCard(props) {
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, dataKey, handleEditData } = props

    const isDateField = (dataKey) => {
      return dataKey.includes('Date')
    }

    return (
        <div className='p-2 relative sm:p-3 border-2 flex items-stretch border-green-50 border-solid w-full w-[40ch]'>

            <div className='flex-1 flex'>
                {!(edit === dataKey) ? <>{children}</> : (
                <div>
                    <p>{edit}</p>
                    
                    {isDateField(dataKey) ? (<input type='date' className='bg-inherit flex-1 text-slate-700 border-b outline-none' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />) 
                    : 
                    (<input className='bg-inherit flex-1 text-slate-700 outline-none border-b-2' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />)}
                    
                    </div>
                )}
                {/* {children} */}
            </div>
            <div className='flex items-center'>
        {edit === dataKey ? (
          <i onClick={handleEditData} className='fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer'></i>
        ) : (
          <i onClick={handleAddEdit(dataKey)} className='fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer'></i>
        )}
      </div>
        </div>
    )
}
