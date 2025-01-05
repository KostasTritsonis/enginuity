import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({

    debug:true,
    fallbackLng:"en",
    resources:{
        en:{
            translation:{
                "Home":"Home",
                "Program":"Program",
                "About us":"About us",
                "Contact us":"Contact us",
                "MATINA MAKRYGIANNI":"MATINA MAKRYGIANNI",
                herotitle:"Your journey to English mastery begins here. Learn, grow, and thrive with us.",
                heropagr:"Unlock your full potential with expert-led English lessons."+
                        "Whether you're starting from scratch or looking to refine your skills,"+
                        "our personalized approach will help you achieve fluency."+
                        "Join us today and open doors to new opportunities!",
                "Our PROGRAM":"Our PROGRAM",
                "What we Offer":"What we Offer",
                "Excellence.":"Excellence",
                "Advancement":"Advancement",
                "Global Opportunity":"Global Opportunity",
                "English Certification: Your Roadmap to Success!":"English Certification: Your Roadmap to Success!",
                A1:"A1 English (Beginner/Elementary)",
                A1Text:"Level A1 corresponds to basic users of English who can understand and"+
                        "use familiar everyday expressions and very basic phrases.",
                A2:"A2 English (Pre Intermediate)",
                A2Text:"Level A2 corresponds to those users who can understand basic expressions and communicate in a simple manner.",
                B1:"B1 English (Intermediate)",
                B1Text:"Level B1 corresponds to users who can understand and produce text on familiar topics and give opinions and descriptions.",
                B2:"B2 English (Upper Intermediate)",
                B2Text:"Level B2 corresponds to users who can produce clear, detailed text and interact with a degree of fluency and spontaneity.",
                C1:"C1 English (Advanced)",
                C1Text:"Level C1 corresponds to users who can express themselves fluently and spontaneously.They can use language flexibly and effectively for all purposes.",
                C2:"C2 English (Proficient)",
                C2Text:"Level C2 corresponds to proficient users of English, who can understand and express virtually everything with ease and differentiate finer shades of meaning.",
                "ABOUT US":"ABOUT US",
                A:"Achieve Your English Goals with Confidence!",
                AText:"Welcome to a learning experience tailored just for you!"+
                    "Our English classes are designed to help you speak, write,"+
                    "and understand English with confidence. Whether you’re preparing for exams,"+
                    "advancing your career, or simply improving your communication,"+
                    "we’ve got you covered.",
                AText2:"With expert teachers and engaging lessons, we focus on real-world language skills"+
                        "that make a difference. Each class is interactive, dynamic, and personalized to suit"+
                        "your goals and pace. From mastering grammar to perfecting pronunciation,"+
                        "we guide you every step of the way.",
                AText3:"Join a supportive community where learning is fun and progress is celebrated."+
                        "Flexible schedules and modern resources ensure you can learn anytime, anywhere."+ 
                        "Let’s make your English dreams a reality.",
                "contact us":"contact us",
                "Get in Touch":"Get in Touch",
                "Send us a message":"Send us a message",
                CText:"Feel free to reach out through contact form or find our contact"+
                    "information below. Your feedback, questions, and suggestions are important"+
                    "to us as we strive to provide exceptional service to our community.",
                "Krieza Aliveriou 34500":"Krieza Aliveriou 34500",
                "Your Name":"Your Name",
                "Phone Number":"Phone Number",
                "Your Email":"Your Email",
                "Write your messages here":"Write your messages here",
                "Sumbit":"Sumbit",
                'Enter your name':'Enter your name',
                'Enter your mobile number':'Enter your mobile number',
                'Enter your email':'Enter your email',
                'Enter your message':'Enter your message',
                "© 2025 Enginuity. All rights reserved.":"© 2025 Enginuity. All rights reserved.",
                "Gallery":"Gallery",
                "Our Class":"Our Class",
            }
        },
        gr:{

            translation:{
                "Home":"Αρχική",
                "Program":"Πρόγραμμα",
                "About us":"Σχετικά με Εμάς",
                "Contact us":"Επικοινωνία",
                "MATINA MAKRYGIANNI":"ΜΑΤΙΝΑ ΜΑΚΡΥΓΙΑΝΝΗ",
                herotitle:"Το ταξίδι σας προς την γνώση της Αγγλικής γλώσσας ξεκινά εδώ. Μάθετε και αναπτυχθείτε μαζί μας.",
                heropagr:"Απελευθερώστε το πλήρες δυναμικό σας με μαθήματα Αγγλικών καθοδηγούμενα από έμας."+
                        "Είτε ξεκινάτε από το μηδέν είτε θέλετε να βελτιώσετε τις δεξιότητές σας, η εξατομικευμένη προσέγγισή μας θα σας βοηθήσει να αποκτήσετε ευχέρια."+
                        "Εγγραφείτε σήμερα και ανοίξτε πόρτες σε νέες ευκαιρίες!",
                "our program":"το προγραμμα μας",
                "What we Offer":"Τι προσφέρουμε",
                "Excellence":"Αριστεία",
                "Advancement":"Πρόοδος",
                "Global Opportunity":"Παγκόσμια Ευκαιρία",
                "English Certification: Your Roadmap to Success!":"Πιστοποίηση Αγγλικών: Ο δρόμος σας προς την επιτυχία!",
                A1:"Αγγλικά A1 (Αρχάριοι/Βασικά)",
                A1Text:"Το επίπεδο A1 αντιστοιχεί σε βασικούς χρήστες της Αγγλικής γλώσσας, οι οποίοι μπορούν"+
                        " να κατανοήσουν και να χρησιμοποιήσουν καθημερινές εκφράσεις και πολύ βασικές φράσεις.",
                A2:"Αγγλικά A2 (Προμεσαίο επίπεδο)",
                A2Text:"Το επίπεδο A2 αντιστοιχεί σε χρήστες που μπορούν να κατανοήσουν βασικές εκφράσεις και να επικοινωνούν με απλό τρόπο.",
                B1:"Αγγλικά B1 (Μέσο επίπεδο)",
                B1Text:"Το επίπεδο B1 αντιστοιχεί σε χρήστες που μπορούν να κατανοήσουν και να παράγουν κείμενα σε γνωστά θέματα και να εκφράζουν απόψεις και περιγραφές.",
                B2:"Αγγλικά B2 (Ανώτερο μέσο επίπεδο)",
                B2Text:"Το επίπεδο B2 αντιστοιχεί σε χρήστες που μπορούν να παράγουν σαφή και λεπτομερή κείμενα και να αλληλεπιδρούν με έναν βαθμό ευχέρειας και αυθορμητισμού.",
                C1:"Αγγλικά C1 (Προχωρημένο επίπεδο)",
                C1Text:"Το επίπεδο C1 αντιστοιχεί σε χρήστες που μπορούν να εκφράζονται άνετα και αυθόρμητα. Μπορούν να χρησιμοποιούν τη γλώσσα ευέλικτα και αποτελεσματικά για κάθε σκοπό.",
                C2:"Αγγλικά C2 (Άριστο επίπεδο)",
                C2Text:"Το επίπεδο C2 αντιστοιχεί σε χρήστες που έχουν άριστη γνώση της Αγγλικής γλώσσας, μπορούν να κατανοούν και "+
                    "να εκφράζονται σχεδόν για τα πάντα με ευκολία και να διακρίνουν τις πιο λεπτές αποχρώσεις της σημασίας.",
                "ABOUT US":"Σχετικά Με Μας",
                A:"Πετύχετε τους Στόχους Σας στα Αγγλικά με Αυτοπεποίθηση!",
                AText:"Καλώς ήρθατε σε μια εμπειρία μάθησης που έχει σχεδιαστεί ειδικά για εσάς! Τα μαθήματα Αγγλικών μας είναι φτιαγμένα για να σας βοηθήσουν να μιλάτε,"+
                    "να γράφετε και να κατανοείτε τα Αγγλικά με αυτοπεποίθηση. Είτε προετοιμάζεστε για εξετάσεις, είτε προχωράτε την καριέρα σας, είτε απλώς βελτιώνετε την επικοινωνία σας," +
                    "είμαστε εδώ για να σας στηρίξουμε.",
                AText2:"Με έμπειρους δασκάλους και ενδιαφέροντα μαθήματα, εστιάζουμε σε πραγματικές γλωσσικές δεξιότητες που κάνουν τη διαφορά. Κάθε μάθημα είναι διαδραστικό,"+
                        "δυναμικό και εξατομικευμένο για να ταιριάζει στους στόχους και το ρυθμό σας. Από την κατάκτηση της γραμματικής μέχρι την τελειοποίηση της προφοράς,"+
                        "σας καθοδηγούμε σε κάθε βήμα της πορείας σας.",
                AText3:"Γίνετε μέλος μιας υποστηρικτικής κοινότητας όπου η μάθηση είναι διασκεδαστική και η πρόοδος γιορτάζεται."+
                        "Ευέλικτα προγράμματα και σύγχρονοι πόροι εξασφαλίζουν ότι μπορείτε να μάθετε όποτε και όπου θέλετε."+
                        "Ας κάνουμε τα όνειρά σας για την Αγγλική πραγματικότητα!",
                "contact us":"Επικοινωνήστε",
                "Get in Touch":"Επικοινωνήστε μαζί μας",
                "Send us a message":"Στείλτε μας ένα μήνυμα",
                CText:"Μην διστάσετε να επικοινωνήσετε μαζί μας μέσω της φόρμας επικοινωνίας ή να βρείτε τα στοιχεία επικοινωνίας μας παρακάτω."+
                    "Η ανατροφοδότηση, οι ερωτήσεις και οι προτάσεις σας είναι σημαντικές για εμάς, καθώς προσπαθούμε να προσφέρουμε εξαιρετική εξυπηρέτηση στην κοινότητά μας.",
                "Krieza Aliveriou 34500":"Κριεζά αλιβερίου 34500",
                "Your Name":"Το Όνομά Σας",
                "Phone Number":"Αριθμός Τηλεφώνου",
                "Your Email":"Το Email Σας",
                "Write your messages here":"Γράψτε τα μηνύματά σας εδώ",
                "Sumbit":"Υποβολή",
                'Enter your name':'Εισάγετε το όνομά σας',
                'Enter your mobile number':'Εισάγετε τον αριθμό κινητού σας',
                'Enter your email':'Εισάγετε το email σας',
                'Enter your message':'Εισάγετε το μήνυμά σας',
                "© 2025 Matina Makrygianni. All rights reserved.":"© 2025 Ματίνα Μακρύγιαννη. Όλα τα δικαιώματα διατηρούνται.",
                "Gallery":"Συλλογή",
                "Our Class":"Η Τάξη Μας",
            }
        }
    }
})

export default i18n;