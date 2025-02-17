import PDFViewer from "../components/PdfViewer";

const Resume = () => {
    return (
        <section className='text-white my-[3.75rem] xl:my-24 mx-[5%]'>
            <p className='md:hidden bg-[#6863FD] my-4 rounded-lg p-4 font-bold text-lg'>
                For the best viewing experience, use a desktop or tablet device.
                You can also{" "}
                <a
                    href='/assets/SAMUEL-OYEBADE-CV.pdf'
                    download='SAMUEL-OYEBADE-CV.pdf'
                    className='opacity-70 underline'>
                    download the PDF{" "}
                </a>
                to view it offline.
            </p>

            <PDFViewer pdfUrl='/assets/SAMUEL-OYEBADE-CV.pdf' />
        </section>
    );
};

export default Resume;
