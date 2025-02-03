import { ReactNode, useRef } from "react";

type FileUploadProps = {
  file: any;
  setFile:Function;
  accept:string;
  children:ReactNode
}
const FileUpload = ({ file, setFile,accept,children}: FileUploadProps) => {
 const ref=useRef<HTMLInputElement>(null)
 
    return (
    <div onClick={()=>ref.current?.click()}>
     <input ref={ref} type="file" accept={accept} style={{display:'none'}}/>
    {children}
    </div>
  )
}

export default FileUpload
