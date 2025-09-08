-- Add expressions and country info data for 2025
-- This migration adds daily expressions for all Nordic countries

-- Clear existing expressions to avoid conflicts
DELETE FROM "Expression" WHERE date >= '2025-01-01';

-- Insert expressions for Swedish (10 unique expressions that will loop)
INSERT INTO "Expression" (id, date, country, expression, pronunciation, meaning, translation, "updatedAt") VALUES
(gen_random_uuid(), '2025-01-01', 'swedish', 'lagom', 'LAH-gom', 'Just the right amount', 'Not too much, not too little', NOW()),
(gen_random_uuid(), '2025-01-02', 'swedish', 'Ingen ko på isen', 'IN-gen ko på I-sen', 'There''s no cow on the ice', 'Don''t worry, everything is fine', NOW()),
(gen_random_uuid(), '2025-01-03', 'swedish', 'Sitta med skägget i brevlådan', 'SIT-ta med SHÄG-get i BREV-lå-dan', 'To sit with your beard in the letterbox', 'To be caught red-handed', NOW()),
(gen_random_uuid(), '2025-01-04', 'swedish', 'Det ligger en hund begraven', 'DET LIG-ger en HUND be-GRA-ven', 'There''s a dog buried', 'Something smells fishy', NOW()),
(gen_random_uuid(), '2025-01-05', 'swedish', 'Att ana ugglor i mossen', 'ATT A-na UG-glor i MOS-sen', 'To suspect there are owls in the bog', 'To smell a rat', NOW()),
(gen_random_uuid(), '2025-01-06', 'swedish', 'Finns det hjärterum så finns det stjärterum', 'FINS det YÄR-te-rum så fins det SHÄR-te-rum', 'If there''s room in the heart, there''s room for the arse', 'Where there''s friendship, there''s always space', NOW()),
(gen_random_uuid(), '2025-01-07', 'swedish', 'Inte skottat ända fram', 'IN-te SKOT-tat ÄN-da FRAM', 'Not shoveled all the way', 'Not the sharpest tool in the shed', NOW()),
(gen_random_uuid(), '2025-01-08', 'swedish', 'Göra en höna av en fjäder', 'YÖ-ra en HÖ-na av en FYÄ-der', 'To make a chicken out of a feather', 'To make a mountain out of a molehill', NOW()),
(gen_random_uuid(), '2025-01-09', 'swedish', 'Köp inte grisen i säcken', 'SHÖP IN-te GRI-sen i SÄK-ken', 'Don''t buy the pig in the bag', 'Don''t buy something without inspecting it first', NOW()),
(gen_random_uuid(), '2025-01-10', 'swedish', 'Rädsla mindre, hoppas mer', 'RÄDS-la MIN-dre, HOP-pas MER', 'Fear less, hope more', 'Don''t worry, be optimistic', NOW());

-- Insert expressions for Danish (10 unique expressions that will loop)
INSERT INTO "Expression" (id, date, country, expression, pronunciation, meaning, translation, "updatedAt") VALUES
(gen_random_uuid(), '2025-01-01', 'danish', 'hygge', 'HOO-guh', 'Cozy, comfortable feeling', 'A feeling of coziness and contentment', NOW()),
(gen_random_uuid(), '2025-01-02', 'danish', 'Hold da helt ferie', 'HOL da HELT fe-RI-e', 'Hold completely holiday', 'Take a complete break', NOW()),
(gen_random_uuid(), '2025-01-03', 'danish', 'Milde Moses', 'MIL-de MO-ses', 'Mild Moses', 'Good heavens!', NOW()),
(gen_random_uuid(), '2025-01-04', 'danish', 'Det er ikke for sjov', 'DET er IK-ke for SHOV', 'It''s not for fun', 'This is serious business', NOW()),
(gen_random_uuid(), '2025-01-05', 'danish', 'At gå i hundene', 'AT gå i HUN-de-ne', 'To go in the dogs', 'To go to the dogs', NOW()),
(gen_random_uuid(), '2025-01-06', 'danish', 'At have en finger med i spillet', 'AT ha-ve en FIN-ger med i SPIL-let', 'To have a finger in the game', 'To be involved in something', NOW()),
(gen_random_uuid(), '2025-01-07', 'danish', 'At være på bølgelængde', 'AT vÄ-re på BÖL-ge-läng-de', 'To be on the same wavelength', 'To understand each other', NOW()),
(gen_random_uuid(), '2025-01-08', 'danish', 'At gå i stå', 'AT gå i STÅ', 'To go in stand', 'To come to a standstill', NOW()),
(gen_random_uuid(), '2025-01-09', 'danish', 'At have hovedet på rette sted', 'AT ha-ve HO-ve-det på RET-te STED', 'To have the head in the right place', 'To be sensible', NOW()),
(gen_random_uuid(), '2025-01-10', 'danish', 'At være i sit es', 'AT vÄ-re i sit ES', 'To be in one''s ace', 'To be in top form', NOW());

-- Insert expressions for Norwegian (10 unique expressions that will loop)
INSERT INTO "Expression" (id, date, country, expression, pronunciation, meaning, translation, "updatedAt") VALUES
(gen_random_uuid(), '2025-01-01', 'norwegian', 'koselig', 'KOO-suh-lee', 'Cozy and pleasant', 'A feeling of warmth and coziness', NOW()),
(gen_random_uuid(), '2025-01-02', 'norwegian', 'Det er ikke bare bare', 'DET er IK-ke BA-re BA-re', 'It''s not just just', 'It''s not that simple', NOW()),
(gen_random_uuid(), '2025-01-03', 'norwegian', 'Å gå i hundene', 'Å gå i HUN-de-ne', 'To go in the dogs', 'To go to the dogs', NOW()),
(gen_random_uuid(), '2025-01-04', 'norwegian', 'Å ha en finger med i spillet', 'Å ha en FIN-ger med i SPIL-let', 'To have a finger in the game', 'To be involved in something', NOW()),
(gen_random_uuid(), '2025-01-05', 'norwegian', 'Å være på bølgelengde', 'Å vÄ-re på BÖL-ge-leng-de', 'To be on the same wavelength', 'To understand each other', NOW()),
(gen_random_uuid(), '2025-01-06', 'norwegian', 'Å gå i stå', 'Å gå i STÅ', 'To go in stand', 'To come to a standstill', NOW()),
(gen_random_uuid(), '2025-01-07', 'norwegian', 'Å ha hodet på rette sted', 'Å ha HO-det på RET-te STED', 'To have the head in the right place', 'To be sensible', NOW()),
(gen_random_uuid(), '2025-01-08', 'norwegian', 'Å være i sitt es', 'Å vÄ-re i sitt ES', 'To be in one''s ace', 'To be in top form', NOW()),
(gen_random_uuid(), '2025-01-09', 'norwegian', 'Det er ikke gull alt som glimrer', 'DET er IK-ke GULL alt som GLIM-rer', 'It''s not gold all that glitters', 'All that glitters is not gold', NOW()),
(gen_random_uuid(), '2025-01-10', 'norwegian', 'Å slå to fluer i en smekk', 'Å slå TO FLU-er i en SMEKK', 'To hit two flies in one smack', 'To kill two birds with one stone', NOW());

-- Insert expressions for Finnish (10 unique expressions that will loop)
INSERT INTO "Expression" (id, date, country, expression, pronunciation, meaning, translation, "updatedAt") VALUES
(gen_random_uuid(), '2025-01-01', 'finnish', 'sisu', 'SEE-soo', 'Determination and resilience', 'Inner strength and perseverance', NOW()),
(gen_random_uuid(), '2025-01-02', 'finnish', 'Ei ole hullu joka pyytää', 'EI o-le HUL-lu jo-ka PY-y-tää', 'He who asks is not crazy', 'It doesn''t hurt to ask', NOW()),
(gen_random_uuid(), '2025-01-03', 'finnish', 'Ei ole tyhmä joka pyytää', 'EI o-le TYH-mä jo-ka PY-y-tää', 'He who asks is not stupid', 'There are no stupid questions', NOW()),
(gen_random_uuid(), '2025-01-04', 'finnish', 'Parempi katsoa kuin katua', 'PA-rem-pi KAT-so-a KU-in KA-tu-a', 'Better to look than to regret', 'Better safe than sorry', NOW()),
(gen_random_uuid(), '2025-01-05', 'finnish', 'Valheella on lyhyet jäljet', 'VAL-he-el-la on LYH-yet YÄL-jet', 'A lie has short tracks', 'A lie has no legs', NOW()),
(gen_random_uuid(), '2025-01-06', 'finnish', 'Itku pitkästä ilosta', 'IT-ku PIT-käs-tä I-los-ta', 'Tears after long-lasting joy', 'It''s all fun and games until someone gets hurt', NOW()),
(gen_random_uuid(), '2025-01-07', 'finnish', 'Oma lehmä ojassa', 'O-ma LEH-mä O-jas-sa', 'My own cow in the ditch', 'Having a personal interest in something', NOW()),
(gen_random_uuid(), '2025-01-08', 'finnish', 'Kuin takapuoleen ammuttu karhu', 'KU-in TA-ka-pu-o-le-en AM-mut-tu KAR-hu', 'Like a bear shot in the behind', 'Extremely agitated or frantic', NOW()),
(gen_random_uuid(), '2025-01-09', 'finnish', 'Kokeilla kepillä jäätä', 'KO-kei-l-la KE-pil-lä JÄÄ-tä', 'To test the ice with a stick', 'To test the waters', NOW()),
(gen_random_uuid(), '2025-01-10', 'finnish', 'Pysyä kärryillä', 'PY-sy-ä KÄR-ry-il-lä', 'To stay on the wagon', 'To keep up with the conversation', NOW());

-- Add CountryInfo data
INSERT INTO "CountryInfo" (id, country, "funFacts", "learningTime", "updatedAt") VALUES
(gen_random_uuid(), 'swedish', ARRAY['Swedish has no future tense - they use present tense for future', 'The word "lagom" has no direct English translation', 'Swedish uses "du" (you) for everyone, even the king'], ARRAY['Basic conversation: 3-6 months', 'Fluency: 1-2 years', 'Native-like: 3-5 years'], NOW()),
(gen_random_uuid(), 'danish', ARRAY['Danish has 3 extra letters: æ, ø, å', 'The word "hygge" is now used worldwide', 'Danish numbers are based on 20s (like French)'], ARRAY['Basic conversation: 4-8 months', 'Fluency: 1.5-2.5 years', 'Native-like: 4-6 years'], NOW()),
(gen_random_uuid(), 'norwegian', ARRAY['Norwegian has two written forms: Bokmål and Nynorsk', 'The word "koselig" is similar to Danish "hygge"', 'Norwegian is very similar to Swedish and Danish'], ARRAY['Basic conversation: 3-6 months', 'Fluency: 1-2 years', 'Native-like: 3-5 years'], NOW()),
(gen_random_uuid(), 'finnish', ARRAY['Finnish is not related to other Nordic languages', 'The word "sisu" represents Finnish character', 'Finnish has 15 cases for nouns'], ARRAY['Basic conversation: 6-12 months', 'Fluency: 2-4 years', 'Native-like: 5-8 years'], NOW())
ON CONFLICT (country) DO UPDATE SET
  "funFacts" = EXCLUDED."funFacts",
  "learningTime" = EXCLUDED."learningTime";
