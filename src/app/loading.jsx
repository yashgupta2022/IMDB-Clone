import Image from "next/image";

export default function loading(){
    return(
        <div className="flex justify-center mt-15">
            <Image className='h-50' src='Spinner-1s-96px.svg' alt= "loading... "/>
        </div>
    )
}