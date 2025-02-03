import { ReactNode, useRef } from "react";

type FileUploadProps = {
  setFile:Function;
  accept:string;
  children:ReactNode
}
const FileUpload = ({  setFile,accept,children}: FileUploadProps) => {
 const ref=useRef<HTMLInputElement>(null)
 const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  if (e.target.files) {
    setFile(e.target.files[0])
  }
 }
    return (
    <div onClick={()=>ref.current?.click()}>
     <input onChange={onChange} ref={ref} type="file" accept={accept} style={{display:'none'}}/>
    {children}
    </div>
  )
}

export default FileUpload
