import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { onTop, ScrollToTop } from "./ScrollToTop";

// Important: You need to set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

const PDFViewer = ({ pdfUrl }: { pdfUrl: string }) => {
    // State to track the number of pages and current page
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);

    // Callback when the document loads successfully
    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className='pdf-container'>
            {/* PDF Document viewer */}
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error: Error) =>
                    console.error("Error loading PDF:", error)
                }>
                <Page pageNumber={pageNumber} />
            </Document>

            {/* Navigation controls */}
            <div className='controls'>
                <button
                    disabled={pageNumber <= 1}
                    onClick={() => {
                        setPageNumber(pageNumber - 1);
                        onTop();
                    }}>
                    Previous
                </button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button
                    disabled={pageNumber >= numPages!}
                    onClick={() => {
                        setPageNumber(pageNumber + 1);
                        onTop();
                    }}>
                    Next
                </button>
            </div>

            <ScrollToTop />
        </div>
    );
};

export default PDFViewer;
