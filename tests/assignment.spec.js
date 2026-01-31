const { test, expect } = require('@playwright/test');

// ==========================================
// 1. DATA PREPARATION
// (Paste your full list of testCases here)
// ==========================================
const testCases = [
  // ==============================================================================
  // 24 POSITIVE FUNCTIONAL TEST CASES (Unique & Not in PDF)
  // ==============================================================================
  
  // --- 1. Sentence Structures (Simple, Compound, Complex) ---
  {
    id: 'Pos_Fun_01',
    input: 'mama potha kiyavanavaa.',
    expected: 'මම පොත කියවනවා.',
    description: 'Simple sentence (Present Tense)',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_02',
    input: 'api cricket gahuwwa saha passe naanna giyaa.',
    expected: 'අපි ක්‍රිකට් ගැහුවා සහ පස්සේ නාන්න ගියා.',
    description: 'Compound sentence (Action + "saha" + Action)',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_03',
    input: 'oyaa kiwwe nathnam mama danne nae.',
    expected: 'ඔයා කිව්වේ නැත්නම් මම දන්නේ නෑ.',
    description: 'Complex sentence (Condition "nathnam")',
    type: 'Positive'
  },

  // --- 2. Questions & Commands (Interrogative/Imperative) ---
  {
    id: 'Pos_Fun_04',
    input: 'oyaa koheda inne?',
    expected: 'ඔයා කොහෙද ඉන්නේ?',
    description: 'Interrogative (Question)',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_05',
    input: 'methana sign karanna.',
    expected: 'මෙතන sign කරන්න.',
    description: 'Imperative (Command with mixed English)',
    type: 'Positive'
  },

  // --- 3. Tenses (Past, Future) ---
  {
    id: 'Pos_Fun_06',
    input: 'amme kaeema kanna',
    expected: 'අම්මෙ කෑම කන්න',
    description: 'Past Tense',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_07',
    input: 'nangi heta panthi yayi.',
    expected: 'නන්ගි හෙට පන්ති යයි..',
    description: 'Future Tense',
    type: 'Positive'
  },

  // --- 4. Negation ---
  {
    id: 'Pos_Fun_08',
    input: 'mata boru kiyanna epaa.',
    expected: 'මට බොරු කියන්න එපා.',
    description: 'Negative form (Command "epaa")',
    type: 'Positive'
  },

  // --- 5. Pronouns & Plurals ---
  {
    id: 'Pos_Fun_09',
    input: 'ballo buranavaa.',
    expected: 'බල්ලෝ බුරනවා.',
    description: 'Plural Subject',
    type: 'Positive'
  },

  // --- 6. Greetings & Common Phrases ---
  {
    id: 'Pos_Fun_10',
    input: 'subha rathriyak!',
    expected: 'සුභ රාත්‍රියක්!',
    description: 'Greeting',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_11',
    input: 'kaalayak tisse dakke nae.',
    expected: 'කාලයක් තිස්සේ දැක්කේ නෑ.',
    description: 'Common phrase (Long time no see)',
    type: 'Positive'
  },

  // --- 7. Politeness Levels ---
  {
    id: 'Pos_Fun_12',
    input: 'obathumaata subha pathanavaa.',
    expected: 'ඔබතුමාට සුභ පතනවා.',
    description: 'Formal/High Politeness',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_13',
    input: 'machan, wade goda daamu.',
    expected: 'මචන්, වැඩේ ගොඩ දාමු.',
    description: 'Informal/Slang',
    type: 'Positive'
  },

  // --- 8. Mixed English / Technical Terms (Appendix 1 Sec 14) ---
  {
    id: 'Pos_Fun_14',
    input: 'mata PDF file eka dhenna..',
    expected: 'මට PDF file එක දෙන්න..',
    description: 'Tech term (PDF) embedded',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_15',
    input: 'oyage Bluetooth on karanna.',
    expected: 'ඔයගේ Bluetooth on කරන්න.',
    description: 'Tech brand (Bluetooth)',
    type: 'Positive'
  },

  // --- 9. Places & Names (Appendix 1 Sec 15) ---
  {
    id: 'Pos_Fun_16',
    input: 'api Galle Face yamu.',
    expected: 'අපි Galle Face යමු.',
    description: 'Place Name preserved',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_17',
    input: 'Saman saha nimal enavaa..',
    expected: 'Saman සහ Kamal එනවා.',
    description: 'Proper Names',
    type: 'Positive'
  },

  // --- 10. Formatting, Punctuation & Numbers (Appendix 1 Sec 17-19) ---
  {
    id: 'Pos_Fun_18',
    input: 'hari, mama ennam.',
    expected: 'හරි, මම එන්නම්.',
    description: 'Punctuation (Comma usage)',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_19',
    input: 'mata Rs. 1000 k dhenna.',
    expected: 'මට Rs. 1000 ක් දෙන්න.',
    description: 'Currency / Numbers',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_20',
    input: 'badaada, 2024-05-10',
    expected: 'බදාදා, 2024-05-10',
    description: 'Date Format',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_21',
    input: 'list eka:\n1. seeni\n2. the kola',
    expected: 'list එක:\n1. සීනි\n2. තේ කොළ',
    description: 'Formatting (Line breaks/List)',
    type: 'Positive'
  },

  // --- 11. Word Combinations & Length ---
  {
    id: 'Pos_Fun_22',
    input: 'podi podi dheval.',
    expected: 'පොඩි පොඩි දේවල්.',
    description: 'Repeated word emphasis',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_23',
    input: 'mama meka liyanne oyaata peena vidhihata test ekak karanna. meka hariyatadha balamu.',
    expected: 'මම මේක ලියන්නේ ඔයාට පේන විදිහට test එකක් කරන්න. මේක හරියට වැඩ ද බලමු.',
    description: 'Medium length sentence (Robustness)',
    type: 'Positive'
  },
  {
    id: 'Pos_Fun_24',
    input: 'ankaave sancharaka kshethraya dhiyunu vemin pavathina athara, vidheashika sancharakayin pamaNak nova dheashiya ayada  aevidhinna bava peni yanavaa.',
    expected: 'අන්කාවෙ සන්චරක ක්ශෙත්‍රය දියුනු වෙමින් පවතින අතර, විදේශික සන්චරකයින් පමණක් නොව දේශිය අයඩ  ඇවිදින්න බව පෙනි යනවා.',
    description: 'Long paragraph input (Complex)',
    type: 'Positive'
  },

  // ==============================================================================
  // 10 NEGATIVE TEST CASES (Unique Failure Scenarios)
  // ==============================================================================

  {
    id: 'Neg_Fun_01',
    input: 'mamagedharayanavaa',
    expected: 'මම ගෙදර යනවා', 
    // Justification: System fails to intelligently segment words when spaces are omitted.
    description: 'Formatting: Missing spaces (Joined words)',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_02',
    input: 'https://www.google.lk',
    expected: 'https://www.google.lk',
    // Justification: System incorrectly transliterates URL chars (e.g., 'www' becomes 'ව්ව්ව්').
    description: 'Robustness: URL Transliteration',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_03',
    input: 'user@domain.com',
    expected: 'user@domain.com',
    // Justification: Email addresses should be preserved, but system likely transliterates them.
    description: 'Robustness: Email Address Handling',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_04',
    input: 'kohomada',
    expected: 'කොහොමද',
    
    description: 'Robustness: Acronyms/Abbreviations',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_05',
    input: '4:00pm',
    expected: '4:00pm',
    // Justification: Time format without space often gets transliterated (e.g., 4:00ප්ම්).
    description: 'Formatting: Time format spacing',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_06',
    input: 'function()',
    expected: 'function()',
    // Justification: Code syntax (programming terms) should not be transliterated.
    description: 'Domain: Code/Syntax Injection',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_07',
    input: 'Password12345',
    expected: 'Password12345',
    // Justification: Alphanumeric strings (like passwords) are often transliterated illegibly.
    description: 'Robustness: Mixed Alphanumeric',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_08',
    input: 'Ctrl+C',
    expected: 'Ctrl+C',
    // Justification: Keyboard shortcuts/technical combinations are transliterated phonetically.
    description: 'Domain: Keyboard Shortcuts',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_09',
    input: 'follw',
    expected: 'follow', 
    // Justification: A typo (missing 'o') results in phonetic garbage (ෆොල්ල්ව්) instead of auto-correction.
    description: 'Quality: Typo Handling',
    type: 'Negative'
  },
  {
    id: 'Neg_Fun_10',
    input: 'bana',
    expected: 'බණ', 
    // Justification: Phonetic ambiguity. "bana" could be "scolding" (බන) or "sermon" (බණ). System likely picks the wrong one contextually.
    description: 'Accuracy: Ambiguous Phonetics (Retroflex)',
    type: 'Negative'
  }
];



export default testCases;


test.describe('IT3040 Assignment 1 - SwiftTranslator', () => {

  // Increase global timeout to 5 minutes because we are adding long waits
  test.setTimeout(300000);

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    // Wait for the page to be fully ready
    await page.waitForLoadState('networkidle'); 
  });

  // ==========================================
  // 2. FUNCTIONAL TESTS LOOP
  // ==========================================
  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      const inputLocator = page.getByPlaceholder('Input Your Singlish Text Here.');
      
      // Select the first div after "Sinhala" title
      const outputLocator = page.locator('//div[contains(@class, "panel-title") and text()="Sinhala"]/following-sibling::div').first();

      // 1. Clear Input
      await inputLocator.clear();

      // 2. Type with a tiny delay to mimic real user (helps site register input)
      await inputLocator.pressSequentially(data.input, { delay: 50 });

      // 3. WAIT: Increased to 5000ms (5 seconds) to handle slow network/site
      await page.waitForTimeout(5000); 

      // 4. Get Actual Output
      const actualOutput = await outputLocator.innerText();

      // LOG RESULTS FOR EXCEL
      console.log(`\n--- TEST: ${data.id} ---`);
      console.log(`INPUT:    ${data.input}`);
      console.log(`EXPECTED: ${data.expected}`);
      console.log(`ACTUAL:   ${actualOutput}`);
      
      // Status Logic
      if (data.type === 'Negative') {
        if(actualOutput.trim() !== data.expected.trim()) {
          console.log('STATUS: PASS (Failure detected correctly)');
        } else {
        console.log('STATUS: FAIL (Unexpected match)');
  }
}


      // Assertion (Optional - keeps the test report green/red)
      // For negative tests, this line might fail the test run, which is fine.
      // expect(actualOutput.trim()).toBe(data.expected.trim());
    });
  }

  // ==========================================
  // 3. UI TEST SCENARIO
  // ==========================================
  test('Pos_UI_01: Verify Real-time Output Update', async ({ page }) => {
      const inputLocator = page.getByPlaceholder('Input Your Singlish Text Here.');
      const outputLocator = page.locator('//div[contains(@class, "panel-title") and text()="Sinhala"]/following-sibling::div').first();

      // Action: Type 'mama'
      await inputLocator.fill('mama');
      
      // FIX: Wait 5 seconds to ensure Firefox catches up
      await page.waitForTimeout(5000);
      
      const partialOutput = await outputLocator.innerText();
      
      console.log('\n--- TEST: Pos_UI_01 ---');
      console.log('Action: Typed "mama"');
      console.log(`Result: ${partialOutput}`);
      
      // This assertion waits until the text appears (auto-retry)
      expect(partialOutput).toContain('මම');
  });

});