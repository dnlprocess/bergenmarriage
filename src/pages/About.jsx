import React from 'react';
import { Phone, Mail, Award, BookOpen, GraduationCap, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const licenses = [
    "New Jersey Board of Psychological Examiners License to Practice Psychology #851",
    "New Jersey Licensed Marriage and Family Therapist #139",
    "Diplomate in Psychotherapy, American Board of Psychotherapy",
    "Fellow, American Academy of Clinical Psychology",
    "Member of the American Psychological Association",
    "Clinical Member, American Association for Marriage and Family Therapy",
    "Clinical Member, NJ Chapter of the American Association for Marriage and Family Therapy",
    "Diplomate in Clinical Psychology, American Board of Professional Psychology"
  ];

  return (
    <div className="bg-[#FAF6EF]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#DDE8D8] to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
                About & Credentials
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-[#1B3A2F] mb-6">
                Dually Licensed Marriage Counselor and Psychologist
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Dr. Reuben E. Gross, Ph.D. of Bergen Marriage & Couples Counseling, is a 
                dually licensed marriage counselor and psychologist in Teaneck, NJ. 
                He has 39 years of experience and was awarded Diplomate Status by 
                fellow experts.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-[#2D5F3F]/10 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-[#2D5F3F] mx-auto mb-4" />
                    <p className="text-2xl font-serif text-[#1B3A2F]">39 Years</p>
                    <p className="text-stone-600">of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="prose-article bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F] mb-6">
              About Reuben E. Gross, PhD, LMFT
            </h2>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                Reuben E. Gross, Ph.D., LMFT (Licensed Marriage Counselor NJ & Family Therapist) offers warm, active, nonjudgmental, empathic, solution-oriented couples and marriage counseling in Bergen County, NJ. He is a highly trained, credentialed, experienced, and caring Marriage Counselor and Psychologist, Licensed In the State of New York as a Psychologist, and in NJ by the New Jersey State Board of Marriage Counselors and the New Jersey State Board of Psychologists.
              </p>
              <p>
                Dr. Gross has been in private practice as a marriage counselor and couples therapist for close to four decades in Teaneck, Bergen County, NJ with a concurrent practice in New York City while teaching and supervising marriage counselors and psychotherapists, and serving as a professor of a clinical supervisor at universities and psychological clinics. He has also chaired professional presentations at annual conferences of the NJ Psychological Association and conducted marital enhancement and couples therapy workshops and communication seminars for married and premarital couples at the Teaneck Community Education Center in Teaneck, New Jersey.
              </p>
              <p>
                Dr. Gross, LMFT, is a very down-to-earth person who offers a practical approach to marriage and premarital counseling, couples counseling, and individual psychotherapy when one member of the couple needs a little more individual attention. As a highly trained and very experienced marriage counselor and psychologist, he will help you address your individual or couple problems beginning with the first marriage counseling session with highly structured, solution-oriented counseling techniques, and he is geared to working with you as rapidly as possible. He will treat you with respect, dignity, and compassion and will ensure maximum confidentiality.
              </p>
            </div>
          </div>

          {/* Licensure & Credentials */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <Award className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Licensure, Diplomate Awards & Professional Memberships
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {licenses.map((license, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#2D5F3F] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">{license}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Abbreviated Resume */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <GraduationCap className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Abbreviated Resumé
              </h2>
            </div>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                After college and prior to graduate school in psychology, Dr. Gross lived near Manila for eighteen months while serving as an officer in the U.S. Air Force. In addition to his Air Force service, after duty hours, he was enrolled at the University of the Philippines, where he studied the political, sociological, religious, and cultural foundations of many countries in the Far East and earned an M.A. in Political Science. During his tour of duty, he traveled extensively in that part of the world. Following his Air Force experience, he worked for a youth organization and subsequently began to study psychology. He earned an M.S and Ph.D. in psychology from Yeshiva University in New York, NY. Since then, he has enhanced his cultural and ethnic knowledge through visits to countries in the Mid East, Asia, Africa, Europe, and Central America.
              </p>
              <p>
                Concurrent with his graduate studies in Psychology, and subsequent to them, Dr. Gross has held a number of appointments in the field of mental health. These include: a 3 year full-time training and internship program in marriage counseling, couples therapy and psychotherapy at the Blanton-Peale Graduate Institute in New York, served as a Staff Psychologist at the Advanced Center for Psychotherapy, Queens, NY; held the appointment of Clinical Psychologist, Bureau of Mental Health Services, Family Court State of Brooklyn, NY; Clinical Associate, Psychological Service Center, New York Society of Clinical Psychologists; Assistant Professor, Long Island University, Brooklyn, NY; Staff Psychologist Bayshore Counseling Center, Bayside, New York; Staff Psychologist, Division of Psychological Services, Farleigh Dickinson University, Teaneck, New Jersey; Faculty Member, Psychiatric Residency Training Program, Department of Psychiatry, Bergen Pines County Hospital, Paramus, New Jersey; Field Supervisor in Clinical Psychology, Graduate School of Applied and Professional Psychology, Rutgers University, New Jersey; Adjunct Professor of Psychology at Touro College, New York, NY. Dr. Gross wrote a weekly column for The Jewish Standard, New Jersey, on the dating and mating problems of singles.
              </p>
              <p>
                Concurrent with most of these appointments, Dr. Gross has had a private practice in which he specialized in psychological testing and in relationship help by conducting couple counseling, premarital and marriage counseling, and individual psychotherapy in New York City and in Teaneck, New Jersey. This included direct services to clients, as well as supervision of other professionals in Bergen County. In view of his various staff and academic appointments, he has had many years of experience working with a wide variety of clientele and problems. At this point in his career, he specializes in marriage counseling, couple counseling, relationship help, and psychotherapy with individuals.
              </p>
            </div>
          </div>

          {/* Theoretical Orientation */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <BookOpen className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Theoretical Orientation
              </h2>
            </div>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <p>
                In view of his dual licensure and close to four decades of practice as a Licensed Psychologist and as a Licensed Marriage and Family Therapist (LMFT), Dr. Gross has had extensive experience as a marriage counselor and psychotherapist with many individuals and couples covering a wide panorama of age, education, ethnic and cultural heritage. His frequent attendance at professional conventions in both disciplines and participation in continuing education classes, seminars, and extended educational programs has greatly expanded his repertoire of therapeutic techniques. When working with clients, he draws from many modalities, including Psychodynamic, Therapy, Cognitive/Behavioral Therapy, Rational-Emotive-Behavioral Therapy (Dr. Gross has an Advanced Certificate from The Albert Ellis Institute), Emotional Focused Couple Therapy, Solution-Focused Marital Therapy, Schema Marital Therapy, John Gottman's "Relationship Theory," and the "Prevention and Relationship Enhancement Program" (PREP) for couples.
              </p>
              <p>
                Drawing upon this rich background of training and experience, Dr. Gross will approach your individual or relationship problems with a richer perspective and insight. He will recognize psychological resistances, emotional logjams, and vicious cycles, and he will assist you in overcoming them as quickly as possible. He will help you understand, evaluate, and neutralize the emotional baggage that you bring to your present situation so that you may be free to lead the kind of life that you choose. Dr. Gross is readily available by e-mail or phone to explain his services and help you clarify your counseling needs, wishes, and goals. He will be happy to answer your questions and will not charge for an e-mail or brief telephone conversation.
              </p>
            </div>
          </div>

          {/* Continued Education */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#DDE8D8] rounded-xl">
                <Globe className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B3A2F]">
                Continued Education Beyond The PhD
              </h2>
            </div>
            
            <div className="text-stone-600 leading-relaxed space-y-6">
              <h3 className="font-semibold text-[#1B3A2F] text-lg">NJ Licensed Marriage and Family Therapist</h3>
              <p>
                All Licensed Marriage and Family Therapists in NJ, are required to take 20 hours of continued education per annum to maintain their licensure. Dr. Gross has maintained that schedule for 39 years. The seminars he has taken are too numerous to mention here.
              </p>
              
              <h3 className="font-semibold text-[#1B3A2F] text-lg">Licensed Psychologist, NJ, and New York</h3>
              <p>
                In addition to the above, Dr. Gross has had educational experiences beyond his Ph.D. by voluntary taking numerous psychological courses/seminars at Psychological Conventions and in private settings to satisfy his personal interests, including Training at The Institute for Research in Hypnosis, NY, The Milton H. Erickson Institute of Hypnosis, NY, Washington Institute of Psychotherapy, NY, Academy of Psychology, PostGraduate Center For Mental Health, University of Medicine and Dentistry of NJ, Instructional Resource Registration, Department of Psychology, Hollisword Hospital, Department of Psychology, V.A. Hospital Lyons, NJ. Frequent participation at National Conventions of the American Association for Marital and Family Therapists in seminars on Marital and Premarital Counseling, Personality, and Sex Disorders. Membership in Peer Supervisory Groups for many years. Personal psychoanalysis and psychotherapy: both individual and group.
              </p>
              <p className="text-[#1B3A2F] font-medium">
                Dr. Gross has organized and chaired nine symposia presented at the NJ Psychological Association's annual meetings on a variety of psychological subjects.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1B3A2F] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-stone-300 mb-8 max-w-xl mx-auto">
              Call for a free 15-minute consultation to discuss your needs and see how 
              Dr. Gross can help you achieve your relationship goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#2D5F3F] hover:bg-[#234A30] text-white rounded-full px-8"
              >
                <a href="tel:2018362737" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (201) 836-2737
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B3A2F] rounded-full px-8"
              >
                <a href="mailto:BergenMarriage1@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Dr. Gross
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}