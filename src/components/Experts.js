import React from 'react'

function Experts() {
  return (<>
    <div className='max-w-[1240px] mb-0 mx-auto p-2 my-10 h-[200px]  md:grid grid-cols-3  '>
        <div className='border  h-[200px] col-span-1 text-center py-4'>
        <img className=' sm:object-contain h-[100%] inline l-[50%] rounded-lg  ' src = "https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148122902.jpg?w=740&t=st=1704725375~exp=1704725975~hmac=c2074b859064bd07fa6b8d127730280926f5a3ac029777959ed61e13a8c14799"/>
        
        </div>
        <div className='border  h-[300px] col-span-2 p-4 flex flex-col justify-center '>
        <h1 className='text-[#5972f2] font-semibold'>Learn React</h1>
        <p className='my-2 text-justify'> 
        React is a JavaScript library for building user interfaces, developed and maintained by Facebook.
        It follows a component-based architecture, where the UI is composed of reusable and independent components. 
        With a declarative syntax and the use of a virtual DOM, React efficiently updates and renders UI elements, 
        optimizing performance. React is widely used for creating dynamic and interactive web applications, providing 
        developers with a powerful toolset for building modern user interfaces.
    
           </p>
        <button className='w-[30%] bg-black text-white p-3 rounded  '>Get started</button>
        </div>
    
    </div>
    
    
    </>
    )
}

export default Experts