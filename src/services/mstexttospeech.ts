import dotenv from "dotenv";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
dotenv.config();

const key: any = process.env.MSTTSSubscriptionKey;
const region: any = process.env.MSTTSRegion;
var audioFile = "YourAudioFile.wav";
const samplearabictext: string =
    "عندما يريد العالم أن يتكلّم ، فهو يتحدّث بلغة يونيكود. تسجّل الآن لحضور المؤتمر الدولي العاشر ليونيكود، الذي سيعقد في 10-12 آذار 1997 بمدينة مَايِنْتْس، ألمانيا. و سيجمع المؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية، الخطوط، تصميم النصوص والحوسبة متعددة اللغات.";

export const texttospeech = async function (text: string) {
    let speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
    let audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
    speechConfig.speechSynthesisLanguage = 'ar-AE';
    speechConfig.speechSynthesisVoiceName = "ar-SA-HamedNeural";

    let synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    try {
        return new Promise<any>(function (resolve: any, reject) {
            synthesizer.speakTextAsync(samplearabictext, function (res) {
                //  let bufferstreamOut = new PassThrough();

                if (res.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                    console.log("synthesis finished.");
                    synthesizer.close();

                    resolve(res);
                } else {
                    console.error("Speech synthesis canceled, " + res.errorDetails + "\nDid you set the speech resource key and region values?");
                    synthesizer.close();

                    reject(null);
                }
            });
        });
    }
    catch (err) {
        throw err;
    }
};
