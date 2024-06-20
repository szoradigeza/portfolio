import PDFViewerComponent from "../../components/PDFViewerComponent/PDFViewerComponent";
import Asd from "../../assets/resume.pdf";

const CvPage = () => {
  return (
    <div>
      <a
        class="float-right mr-10 hover:text-yellow-400 hover:scale-125"
        href="/portfolio/assets/resume.pdf"
        download="Geza_Szoradi_resume"
      >
        Download
      </a>

      <div class="text-white">
        <div class=" mt-[65rem]  flex flex-col items-center justify-center text-center">
          <PDFViewerComponent pdfFilePath="/portfolio/assets/resume.pdf" />
        </div>
      </div>
    </div>
  );
};

export default CvPage;
