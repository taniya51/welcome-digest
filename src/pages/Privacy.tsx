const Privacy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2024</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect your email address and optional first name when you subscribe to our newsletter.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use your information solely to deliver our newsletter and improve our content.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Protection</h2>
          <p className="text-muted-foreground mb-4">
            Your data is secure and we never share it with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;