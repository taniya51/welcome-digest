const Terms = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2024</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By subscribing to The Digest, you agree to these terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Service</h2>
          <p className="text-muted-foreground mb-4">
            Our newsletter is provided for informational purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;