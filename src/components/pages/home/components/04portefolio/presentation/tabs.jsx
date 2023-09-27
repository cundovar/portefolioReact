import React from "react"
import { useState } from "react"


export function Tabs ({children}){
    console.log(React.Children.toArray(children))
    const childArray= React.Children.toArray(children)
    const [current,setCurrent]=useState(childArray[0].key)

    const newChildren=childArray.map(child=>{
        return React.cloneElement(child,{selected:child.key===current})
      })

   
 
    return (
    <div className="flex">
        <nav >
            {childArray.map(child=>(
                < li className="boutonss" onClick={()=>setCurrent(child.key)} key={child.key}>{child.props.title} </li>
            ) )}
        </nav>
        <section className="flex">
            {newChildren}
        </section>
    </div>
    )
}

export function Tab({children,selected}){
    return(

    <div hidden={!selected} >
        {children}
    </div>
    )
}

