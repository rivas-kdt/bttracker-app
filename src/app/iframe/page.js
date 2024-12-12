export default function IFrame() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <iframe 
                src="https://www.v0.dev/" 
                className="w-[80%] h-[80%] border-none" 
                loading="lazy" 
                title="v0.dev website"
            ></iframe>
        </div>
    );
}