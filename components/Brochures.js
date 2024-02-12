import Container from "./container";
import Brochure from "../public/files/Brochure.pdf";
import Brochure1 from "../public/files/Brochure1.pdf";


export default function Brochures() {
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center bg-gray-300 rounded-lg">
                <iframe src="files/Brochure.pdf" height="800" width="700" className="md:scale-95 sm:scale-75" />
                <iframe src="files/Brochure1.pdf" height="800" width="700" className="md:scale-95 sm:scale-75" />
            </div>
        </>
    );
}