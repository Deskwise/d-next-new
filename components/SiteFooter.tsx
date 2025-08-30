export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-20 py-12 bg-dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/Deskwise_logo.svg"
                alt="Deskwise logo"
                className="h-8 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(166, 218, 255, 0.9)) drop-shadow(0 0 12px rgba(166, 218, 255, 0.6)) drop-shadow(0 0 20px rgba(166, 218, 255, 0.3))'
                }}
              />
            </div>
            <p className="text-muted-light mb-4 max-w-md">
              Real-time intelligence, measurable impact, production-grade delivery.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@deskwise.com" className="text-muted-light hover:text-brand transition-colors">
                info@deskwise.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#why" className="text-muted-light hover:text-brand transition-colors">Executive X-Ray</a></li>
              <li><a href="#features" className="text-muted-light hover:text-brand transition-colors">Proof Sprint</a></li>
              <li><a href="#plans" className="text-muted-light hover:text-brand transition-colors">ResearchOps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#proof" className="text-muted-light hover:text-brand transition-colors">Case Studies</a></li>
              <li><a href="/privacy" className="text-muted-light hover:text-brand transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-muted-light hover:text-brand transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/50 mb-4 md:mb-0">
            © 2025 Deskwise. Some design elements adapted from the Landio template. Used with attribution.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-brand text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand/90 transition-colors">
              Book A Free Call
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}