import PDFViewer from "../components/PdfViewer";

const Resume = () => {
    return (
        <section className='text-white my-[3.75rem] xl:my-24 mx-[5%]'>
            <PDFViewer pdfUrl='/assets/SAMUEL-OYEBADE-CV.pdf' />
        </section>
    );
};

export default Resume;
