import { useState } from "react";
import { Header } from "./Header";
import { LandingPage } from "./LandingPage";
import { SectionView } from "./SectionView";
import { PolicyDetails } from "./PolicyDetails";
import { AttachmentDialog } from "./AttachmentDialog";
import { PhotoGallery } from "./PhotoGallery";
import { PhotoGalleryDetails } from "./PhotoGalleryDetails";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<any | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [showAttachmentDialog, setShowAttachmentDialog] = useState(false);
  const [currentAttachments, setCurrentAttachments] = useState<any[]>([]);

  const handleSectionClick = (section: string) => {
    setCurrentSection(section);
    setSelectedPolicy(null);
  };

  const handleBackToHome = () => {
    setCurrentSection(null);
    setSelectedPolicy(null);
  };

  const handleBackClick = () => {
    if (selectedPolicy) {
      setSelectedPolicy(null);
    } else if (selectedEvent) {
      setSelectedEvent(null);
    } else {
      setCurrentSection(null);
    }
  };

  const handlePolicyDetailsClick = (policy: any) => {
    setSelectedPolicy(policy);
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
        showBackButton={currentSection !== null || selectedPolicy !== null || selectedEvent !== null}
      />
      
      <main>
        {selectedPolicy ? (
          <PolicyDetails
            policy={selectedPolicy}
            language={language}
            onBack={() => setSelectedPolicy(null)}
            onAttachmentClick={handleAttachmentClick}
          />
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
        ) : currentSection ? (
          <SectionView
            section={currentSection}
            language={language}
            onBack={handleBackToHome}
            onPolicyDetailsClick={handlePolicyDetailsClick}
            onAttachmentClick={handleAttachmentClick}
          />
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