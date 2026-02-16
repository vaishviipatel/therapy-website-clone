import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-serif text-gray-800">MAYA REYNOLDS</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="text-gray-600 hover:text-[#87A96B] transition">ABOUT</a>
            <a href="#services" className="text-gray-600 hover:text-[#87A96B] transition">SERVICES</a>
            <a href="#office" className="text-gray-600 hover:text-[#87A96B] transition">OFFICE</a>
            <a href="#faq" className="text-gray-600 hover:text-[#87A96B] transition">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-[#87A96B] transition">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero.avif" 
            alt="Peaceful therapy space" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-white leading-tight">
            Anxiety & Trauma Therapy in San Francisco, CA
          </h1>
          <p className="text-lg md:text-2xl text-white mb-10 font-light">
            Licensed therapist specializing in anxiety, trauma, and relationship counseling
          </p>
          <button className="px-10 py-4 bg-[#87A96B] text-white rounded-full text-lg hover:bg-[#6B8A54] transition shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Life's challenges can feel overwhelming. Whether you're navigating anxiety, healing from trauma, 
            or working through relationship difficulties, therapy offers a safe and compassionate space 
            to explore, process, and grow. I'm here to walk alongside you on your journey toward healing and self-discovery.
          </p>
        </div>
      </section>

      {/* About Section - Image + Text */}
      <section id="about" className="py-20 px-6 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/maya.jpg" 
                alt="Dr. Maya Reynolds" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              About Dr. Maya Reynolds
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I'm a licensed Marriage and Family Therapist (LMFT) with over 12 years of experience 
              helping individuals and couples navigate anxiety, trauma, and life transitions. I hold 
              a Master's degree in Clinical Psychology and am trained in evidence-based therapeutic 
              approaches including CBT, EMDR, and Emotionally Focused Therapy (EFT).
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              My approach is warm, collaborative, and tailored to your unique needs. I believe in 
              creating a safe, non-judgmental space where you can explore difficult emotions, process 
              past experiences, and develop practical tools for lasting change. Whether you're dealing 
              with anxiety, healing from trauma, or working to improve your relationships, I'm here to 
              support you every step of the way.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I understand that reaching out for help takes courage. My goal is to help you reconnect 
              with your inner strength, build resilience, and create a life that feels authentic and 
              fulfilling. Together, we'll work toward the changes you want to see in your life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - 3 Cards */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-gray-800">
            Services
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Specialized therapy tailored to your unique needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Anxiety Therapy */}
            <div className="group">
              <div className="aspect-square rounded-lg mb-6 overflow-hidden shadow-md">
                <img 
                  src="/images/service-1.avif" 
                  alt="Anxiety therapy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-[#2C3E23]">Anxiety Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                Find relief from persistent worry, panic attacks, and overwhelming stress. Using 
                evidence-based approaches like CBT and mindfulness techniques, I'll help you develop 
                practical tools to manage anxiety and regain a sense of calm and control in your daily life.
              </p>
            </div>

            {/* Service 2 - Trauma Processing */}
            <div className="group">
              <div className="aspect-square rounded-lg mb-6 overflow-hidden shadow-md">
                <img 
                  src="/images/service-2.avif" 
                  alt="Trauma processing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-[#2C3E23]">Trauma & PTSD Treatment</h3>
              <p className="text-gray-600 leading-relaxed">
                Heal from past traumatic experiences using trauma-informed care and EMDR therapy. 
                Whether you're dealing with childhood trauma, relationship trauma, or PTSD, I provide 
                a compassionate space to process difficult memories and move toward healing at your own pace.
              </p>
            </div>

            {/* Service 3 - Relationship Counseling */}
            <div className="group">
              <div className="aspect-square rounded-lg mb-6 overflow-hidden shadow-md">
                <img 
                  src="/images/service-3.avif" 
                  alt="Relationship counseling" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-[#2C3E23]">Relationship Counseling</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen your relationships and improve communication with partners, family members, 
                or friends. Through Emotionally Focused Therapy (EFT), we'll work on building deeper 
                connections, resolving conflicts, and creating healthier relationship patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section - NEW CUSTOM SECTION */}
      <section id="office" className="py-20 px-6 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-gray-800">
            A Calm Space for Healing
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            My office in San Francisco is designed to be a peaceful sanctuary where you can feel 
            safe, comfortable, and supported on your healing journey. From the moment you walk in, 
            you'll find a warm, welcoming environment that promotes openness and healing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Office Image 1 */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/office-1.avif" 
                alt="Therapy office" 
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Office Image 2 */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/office-2.avif" 
                alt="Counseling room" 
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Office Image 3 */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/office-3.avif" 
                alt="Waiting area" 
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 text-lg mb-2">
              <strong className="text-[#2C3E23]">Location:</strong> San Francisco, California
            </p>
            <p className="text-gray-700 text-lg mb-4">
              456 Valencia Street, Suite 300, San Francisco, CA 94103
            </p>
            <p className="text-gray-600 mb-2">
              Conveniently located in the Mission District with easy access to public transportation
            </p>
            <p className="text-gray-600">
              In-person and secure telehealth sessions available
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif mb-3 text-[#2C3E23]">
                What can I expect in our first session?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our first session is an opportunity to get to know each other and discuss what brings 
                you to therapy. We'll explore your current challenges, your goals for therapy, and what 
                you hope to achieve. I'll also explain my therapeutic approach and answer any questions 
                you may have. This session is about creating a safe, comfortable foundation for our work together.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif mb-3 text-[#2C3E23]">
                Do you accept insurance?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, 
                and United Healthcare. I'm also happy to provide you with a superbill for out-of-network 
                reimbursement if your plan allows. Please contact me to verify your specific coverage and 
                discuss payment options.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif mb-3 text-[#2C3E23]">
                How long are sessions?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Standard individual therapy sessions are 50 minutes. Couples therapy sessions are typically 
                75 minutes to allow adequate time for both partners to share and work through issues together. 
                We can discuss your specific needs and adjust accordingly.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pb-8">
              <h3 className="text-2xl font-serif mb-3 text-[#2C3E23]">
                Do you offer telehealth sessions?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! I offer secure, HIPAA-compliant video therapy sessions for clients who prefer online 
                therapy or cannot attend in person. Telehealth provides the same quality of care as in-person 
                sessions with the added convenience of meeting from the comfort of your own space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Taking the first step toward therapy can feel overwhelming, but you don't have to do it alone. 
            I'm here to support you on your journey toward healing, growth, and positive change. 
            Reach out today to schedule a free 15-minute consultation.
          </p>
          <button className="px-10 py-4 bg-[#87A96B] text-white rounded-full text-lg hover:bg-[#6B8A54] transition shadow-lg">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#2C3E23] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-serif mb-4">Dr. Maya Reynolds, LMFT</p>
          <p className="text-gray-300 mb-2">San Francisco, California</p>
          <p className="text-gray-300 mb-6">Licensed Marriage and Family Therapist #12345</p>
          <p className="text-sm text-gray-400">
            &copy; 2024 Maya Reynolds Therapy. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  )
}