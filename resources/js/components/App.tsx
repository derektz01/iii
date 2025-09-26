import { useState } from "react";
import { Header } from "./Header";
import { LandingPage } from "./LandingPage";
import { AttachmentDialog } from "./AttachmentDialog";
import { PhotoGallery } from "./sections/PhotoGallery";
import { PhotoGalleryDetails } from "./sections/PhotoGalleryDetails";

// Import section-specific components
import { PoliciesView } from "./sections/PoliciesView";
import { PoliciesDetails } from "./sections/PoliciesDetails";
import { NoticesView } from "./sections/NoticesView";
import { NoticesDetails } from "./sections/NoticesDetails";
import { BenefitsView } from "./sections/BenefitsView";
import { BenefitsDetails } from "./sections/BenefitsDetails";
import { PressView } from "./sections/PressView";
import { PressDetails } from "./sections/PressDetails";
import { PublicationsView } from "./sections/PublicationsView";
import { PublicationsDetails } from "./sections/PublicationsDetails";
import { FormsView } from "./sections/FormsView";
import { FormsDetails } from "./sections/FormsDetails";
import { JobsView } from "./sections/JobsView";
import { JobsDetails } from "./sections/JobsDetails";
import { RiskAssessmentsView } from "./sections/RiskAssessmentsView";
import { RiskAssessmentsDetails } from "./sections/RiskAssessmentsDetails";
import { SafetyTipsView } from "./sections/SafetyTipsView";
import { SafetyTipsDetails } from "./sections/SafetyTipsDetails";
import { HandbooksView } from "./sections/HandbooksView";
import { HandbooksDetails } from "./sections/HandbooksDetails";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<any | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [showAttachmentDialog, setShowAttachmentDialog] = useState(false);
  const [currentAttachments, setCurrentAttachments] = useState<any[]>([]);

  const handleSectionClick = (section: string) => {
    setCurrentSection(section);
    setSelectedSection(null);
  };

  const handleBackToHome = () => {
    setCurrentSection(null);
    setSelectedSection(null);
  };

  const handleBackClick = () => {
    if (selectedSection) {
      setSelectedSection(null);
    } else if (selectedEvent) {
      setSelectedEvent(null);
    } else {
      setCurrentSection(null);
    }
  };

  const handleSectionDetailsClick = (section: any) => {
    setSelectedSection(section);
  };

  const handleEventDetailsClick = (event: any) => {
    setSelectedEvent(event);
  };



  const handleAttachmentClick = (attachments: any[]) => {
    if (attachments.length === 1) {
      // If only one attachment, download directly
      console.log(`Downloading ${attachments[0].name}`);
      // In a real app, this would trigger the actual download
    } else {
      // If multiple attachments, show selection dialog
      setCurrentAttachments(attachments);
      setShowAttachmentDialog(true);
    }
  };

  const handleCloseAttachmentDialog = () => {
    setShowAttachmentDialog(false);
    setCurrentAttachments([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        language={language}
        onLanguageChange={setLanguage}
        onBackClick={handleBackClick}
        showBackButton={currentSection !== null || selectedSection !== null || selectedEvent !== null}
      />
      
      <main>
        {selectedSection ? (
          // Use section-specific details component based on current section
          currentSection === "policies" ? (
            <PoliciesDetails
              policy={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "notices" ? (
            <NoticesDetails
              notice={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "benefits" ? (
            <BenefitsDetails
              benefit={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "press" ? (
            <PressDetails
              press={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "publications" ? (
            <PublicationsDetails
              publication={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "forms" ? (
            <FormsDetails
              form={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "jobs" ? (
            <JobsDetails
              job={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "risk-assessments" ? (
            <RiskAssessmentsDetails
              riskAssessment={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "safety-tips" ? (
            <SafetyTipsDetails
              safetyTip={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : currentSection === "handbooks-videos" ? (
            <HandbooksDetails
              handbook={selectedSection}
              language={language}
              onBack={() => setSelectedSection(null)}
              onAttachmentClick={handleAttachmentClick}
            />
          ) : null
        ) : selectedEvent ? (
          <PhotoGalleryDetails
            event={selectedEvent}
            language={language}
            onBack={() => setSelectedEvent(null)}
          />
        ) : currentSection === "gallery" ? (
          <PhotoGallery
            language={language}
            onEventClick={handleEventDetailsClick}
          />
        ) : currentSection === "policies" ? (
          <PoliciesView
            language={language}
            onBack={handleBackToHome}
            onPolicyDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "notices" ? (
          <NoticesView
            language={language}
            onBack={handleBackToHome}
            onNoticeDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "benefits" ? (
          <BenefitsView
            language={language}
            onBack={handleBackToHome}
            onBenefitDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "press" ? (
          <PressView
            language={language}
            onBack={handleBackToHome}
            onPressDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "publications" ? (
          <PublicationsView
            language={language}
            onBack={handleBackToHome}
            onPublicationDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "forms" ? (
          <FormsView
            language={language}
            onBack={handleBackToHome}
            onFormDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "jobs" ? (
          <JobsView
            language={language}
            onBack={handleBackToHome}
            onJobDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "risk-assessments" ? (
          <RiskAssessmentsView
            language={language}
            onBack={handleBackToHome}
            onRiskAssessmentDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "safety-tips" ? (
          <SafetyTipsView
            language={language}
            onBack={handleBackToHome}
            onSafetyTipDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection === "handbooks-videos" ? (
          <HandbooksView
            language={language}
            onBack={handleBackToHome}
            onHandbookDetailsClick={handleSectionDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
        ) : currentSection ? (
          // This fallback should not be reached anymore since all sections have specific components
          <div className="text-center py-12">
            <p className="text-gray-600">Section not found</p>
          </div>
        ) : (
          <LandingPage
            language={language}
            onSectionClick={handleSectionClick}
          />
        )}
      </main>
      
      <AttachmentDialog
        isOpen={showAttachmentDialog}
        onClose={handleCloseAttachmentDialog}
        attachments={currentAttachments}
        language={language}
      />
    </div>
  );
}