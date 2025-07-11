import { Children } from "react"

const Container = ({ Children }) => {
  return <div className='w-[1120px] mx-auto'>{Children}</div>
  
}

export default Container