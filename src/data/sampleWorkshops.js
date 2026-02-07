// Sample workshop data structure
// Replace with your actual workshop content

export const sampleWorkshops = [
  {
    id: 1,
    title: 'Digital Payment Basics',
    titleHindi: 'डिजिटल पेमेंट की मूल बातें',
    language: 'both', // 'hindi', 'english', or 'both'
    duration: '45 mins',
    level: 'Beginner',
    icon: '💳',
    description: 'Learn how to use UPI, mobile banking, and digital wallets safely',
    descriptionHindi: 'UPI, मोबाइल बैंकिंग और डिजिटल वॉलेट का सुरक्षित रूप से उपयोग करना सीखें',
    videoUrl: 'https://youtube.com/watch?v=...', // Add your video URL
    videoUrlHindi: 'https://youtube.com/watch?v=...', // Hindi version
    thumbnail: '/workshops/digital-payment.jpg',
    topics: [
      'UPI basics',
      'Safety tips',
      'Common mistakes to avoid',
    ],
    resources: [
      { name: 'UPI Guide PDF', url: '/resources/upi-guide.pdf' },
      { name: 'Safety Checklist', url: '/resources/safety-checklist.pdf' },
    ],
  },
  {
    id: 2,
    title: 'Starting Your Own Business',
    titleHindi: 'अपना खुद का व्यवसाय शुरू करना',
    language: 'both',
    duration: '1 hour',
    level: 'Intermediate',
    icon: '🚀',
    description: 'Basic entrepreneurship principles and how to start small',
    descriptionHindi: 'बुनियादी उद्यमिता सिद्धांत और छोटे से कैसे शुरू करें',
    videoUrl: 'https://youtube.com/watch?v=...',
    videoUrlHindi: 'https://youtube.com/watch?v=...',
    thumbnail: '/workshops/entrepreneurship.jpg',
    topics: [
      'Business idea validation',
      'Starting with minimal investment',
      'Finding your first customers',
    ],
    resources: [
      { name: 'Business Plan Template', url: '/resources/business-plan.pdf' },
      { name: 'Cost Calculator', url: '/resources/calculator.xlsx' },
    ],
  },
  {
    id: 3,
    title: 'Saving and Investment Basics',
    titleHindi: 'बचत और निवेश की मूल बातें',
    language: 'both',
    duration: '50 mins',
    level: 'Beginner',
    icon: '💰',
    description: 'How to save money and make it grow',
    descriptionHindi: 'कैसे पैसे बचाएं और उन्हें बढ़ाएं',
    videoUrl: 'https://youtube.com/watch?v=...',
    videoUrlHindi: 'https://youtube.com/watch?v=...',
    thumbnail: '/workshops/savings.jpg',
    topics: [
      'Types of savings accounts',
      'Government schemes for women',
      'Simple investment options',
    ],
    resources: [
      { name: 'Savings Guide', url: '/resources/savings-guide.pdf' },
      { name: 'Scheme Comparison', url: '/resources/schemes.pdf' },
    ],
  },
]

export default sampleWorkshops


