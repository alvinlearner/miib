const data = [
  {
    question: 'Employee Benefits',
    answer:
      'Employee benefits provides financial protection and support to employees and their families in times of illness, injury, or other unforeseen circumstances.',
  },
  {
    question: 'Political Violence, Terrorism & Sabotage Extensions',
    answer: 'Political Violence, Terrorism & Sabotage Extensions provide coverage for damages or losses caused by acts of terrorism, political violence, or deliberate sabotage.',
  },
  {
    question: 'Professional Indemnity',
    answer:
      'Professional Indemnity insurance provides coverage for professionals against claims of negligence, errors, or omissions made by clients or third parties, ensuring financial protection for legal costs and settlements.',
  },
  {
    question: 'Kidnap & Ransom',
    answer:
      'Kidnap & Ransom insurance provides coverage for individuals or companies in case of kidnapping, extortion, or ransom demands, offering financial support for ransom payments, crisis management, and related expenses.',
  },
  {
    question: 'Trustees Liability Insurance',
    answer: 'Trustees Liability Insurance provides coverage for trustees against claims of negligence, breaches of fiduciary duty, or mismanagement of assets, safeguarding them from financial losses and legal expenses.',
  },
  {
    question: "Fidelity Guarantee",
    answer: "Fidelity Guarantee insurance protects businesses from financial losses caused by acts of fraud, dishonesty, or theft committed by their employees, providing coverage for direct financial losses or damages incurred as a result of such incidents."
  },
  {
    question: "Image Protector",
    answer: "Designed to protect businesses from financial losses resulting from damage to their reputation or public image. This coverage may include crisis management, public relations expenses, and legal fees associated with reputational damage events such as defamation, slander, or negative publicity."
  },
  {
    question: "Plate Glass",
    answer: "Plate Glass insurance provides coverage for damage or breakage of glass windows, doors, or mirrors on a premises, including replacement or repair costs, ensuring financial protection against unexpected glass-related expenses."
  },
  {
    question: "Marine Insurance",
    answer: "Marine Insurance provides coverage for vessels, cargo, and related liabilities during marine transit, offering financial protection against risks such as accidents, theft, natural disasters, and other perils that may occur while goods are transported by sea, air, or land."
  },
  {
    question: "Travel Insurance",
    answer: "Travel Insurance provides coverage for individuals traveling domestically or internationally, offering financial protection against a range of unforeseen events such as trip cancellations, medical emergencies, lost luggage, travel delays, and other travel-related risks."
  },
  {
    question: "Domestic Package",
    answer: "Domestic Package Insurance is a type of insurance policy that combines multiple coverages into a single package, typically tailored for homeowners or renters. It typically includes protection for property (such as buildings and contents), liability (for personal injury or property damage to others), and sometimes additional coverages like medical payments or loss of use."
  },
  {
    question: "Goods in Transit",
    answer: "Goods in Transit insurance provides coverage for loss or damage to goods while they are being transported from one location to another, whether by road, rail, sea, or air. This insurance protects against risks such as theft, accidents, natural disasters, and other perils that may occur during transit, ensuring financial compensation for the value of the goods involved."
  },
  {
    question: "Erection all Risks",
    answer: "Erection All Risks (EAR) insurance provides coverage for projects involving the installation, assembly, or construction of machinery, equipment, or structures. It protects against risks such as accidental damage, theft, fire, natural disasters, and other perils that may occur during the erection or construction process, ensuring financial compensation for repair or replacement costs."
  },
  {
    question: "Contractors All Risks",
    answer: "Contractors All Risks (CAR) insurance provides comprehensive coverage for construction projects, including protection against accidental damage, theft, fire, natural disasters, and third-party liabilities during the construction phase."
  },
  {
    question: "Machinery Breakdown & Machinery Con Loss",
    answer: "Machinery Breakdown & Machinery Consequential Loss insurance covers the financial losses incurred due to sudden mechanical failures or breakdowns of machinery, as well as the resulting business interruption or consequential losses."
  },
{
    question: "Employers Liability",
    answer: "Employers Liability insurance provides coverage for employers against claims of injury, illness, or death brought by employees during the course of their employment, ensuring financial protection for legal expenses and compensation payouts."
  },
{
    question: "Work Injury Benefits (WIBA)",
    answer: "Work Injury Benefits (WIBA) is a form of insurance that provides coverage for employees who suffer injuries or disabilities while on the job, offering financial support for medical expenses, disability benefits, and sometimes death benefits to the affected worker or their dependents."
  },
{
    question: "Motor Insurance (Private & Commercial)",
    answer: "Motor Insurance for both private and commercial vehicles provides coverage for damages, theft, liability, and other risks associated with operating vehicles for personal or business purposes, ensuring financial protection and compliance with legal requirements for corporate entities."
  },
{
    question: "Directors’ & Officers’ Liability Insurance",
    answer: "Directors’ & Officers’ Liability Insurance (D&O) provides coverage for directors, officers, and executives against claims alleging wrongful acts, errors, or omissions committed in their management roles, protecting them from financial losses due to legal expenses, settlements, or judgments."
  },
{
    question: "Public Liability",
    answer: "Public Liability insurance covers individuals or businesses against claims of third-party bodily injury, property damage, or other related liabilities that occur on their premises or as a result of their operations, providing financial protection for legal expenses and compensation payments."
  },
{
    question: "Money Insurance",
    answer: "Money Insurance provides coverage for loss of money, cash, or valuables due to theft, robbery, burglary, or other specified perils, ensuring financial compensation for the insured entity's monetary losses."
  },
{
    question: "Computer & Electronic Equipment",
    answer: "Computer & Electronic Equipment insurance provides coverage for damage, theft, or breakdown of electronic devices, computer systems, and related equipment, offering financial protection for repair or replacement costs and business interruption expenses."
  },
{
    question: "All Risks Insurance",
    answer: "All Risks Insurance is a comprehensive type of insurance that provides coverage for a wide range of risks, excluding only those specifically mentioned as exclusions in the policy. It typically covers accidental damage, theft, fire, natural disasters, and other perils that may occur, offering broad financial protection for insured assets or properties"
  },
{
    question: "Burglary Insurance",
    answer: "Burglary Insurance provides coverage for losses resulting from theft, burglary, or attempted theft of property or assets from a premises. It typically includes protection for stolen goods, damage to property caused by burglars, and sometimes covers additional expenses such as repairing security systems or locks after a burglary."
  },
{
    question: "Fire Consequential Loss",
    answer: "Fire Consequential Loss insurance provides coverage for financial losses incurred as a result of damage or destruction caused by a fire to insured property or assets. It typically includes compensation for business interruption, extra expenses incurred to minimize losses, and loss of profits during the restoration or reconstruction period after the fire incident."
  },
{
    question: "Fire & Special Perils",
    answer: "Fire & Special Perils insurance provides coverage for damage or losses caused by fire, lightning, explosion, earthquake, storm, flood, and other specified perils. It typically includes protection for buildings, contents, stock, and other assets, offering financial compensation for repair or replacement costs resulting from these perils."
  },
{
    question: "Medical Insurance",
    answer: "Insurance that covers medical expenses, including hospitalization, prescription drugs, preventive care, and other healthcare services, offering financial support during medical treatments and emergencies."
  },
{
    question: "Group Personal Accident for Staff & Board Members",
    answer: "Group Personal Accident insurance provides coverage for staff and board members against accidental bodily injury, disability, or death. It typically includes benefits such as medical expenses, income replacement, lump-sum payments for permanent disability or death, and other related costs resulting from covered accidents."
  },
{
    question: "Group Life Insurance",
    answer: "Group Life Insurance provides coverage for a group of individuals, such as employees of a company or members of an organization, against the risk of death. It typically offers a lump-sum payment or a series of payments to the beneficiaries of the insured group in the event of an employee's death while covered under the policy. This insurance helps provide financial security to the dependents of the insured group members."
  }
];
  
  export default data;
  