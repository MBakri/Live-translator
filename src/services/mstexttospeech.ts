import dotenv from "dotenv";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
dotenv.config();

const key: any = process.env.MSTTSSubscriptionKey;
const region: any = process.env.MSTTSRegion;
var audioFile = "YourAudioFile.wav";
const samplearabictext: string = "مرحبا ، أنا ليز ويد تجلب لك أضواء كاشفة كلمة اليوم. كلمة اليوم بسيطة. هذه الكلمة تأتي من برنامج تدمير الجدري. عينة الكلمة هي اسم. هذا يعني جزءا صغيرا أو مقدارا من شيء يمكنك دراسته لمعرفة المزيد عن الشيء. تم أخذها منزل.فيما يلي عينة في جملة من هذا البرنامج. يمكن لأحد العلماء غير الشرفاء سرقة عينة صغيرة من المرض.في التعليقات أدناه ، حاول استخدام نموذج الكلمة في جملتك الخاصة وانضم إلينا في المرة القادمة للحصول على كلمة أخرى من اليوم "
export const texttospeech = async function (text: string) {
    let speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
    let audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
    speechConfig.speechSynthesisLanguage = 'ar-AE';
    speechConfig.speechSynthesisVoiceName = "ar-SA-HamedNeural";

    let synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    try {
        return new Promise<any>(function (resolve: any, reject) {
            synthesizer.speakTextAsync(samplearabictext, function (res) {
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
