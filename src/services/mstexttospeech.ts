import dotenv from "dotenv";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { PassThrough } from "stream";
dotenv.config();

const key: any = process.env.MSTTSSubscriptionKey;
const region: any = process.env.MSTTSRegion;
const samplearabictext: string = 'عندما يريد العالم أن يتكلّم ، فهو يتحدّث بلغة يونيكود. تسجّل الآن لحضور المؤتمر الدولي العاشر ليونيكود، الذي سيعقد في 10-12 آذار 1997 بمدينة مَايِنْتْس، ألمانيا. و سيجمع المؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية، الخطوط، تصميم النصوص والحوسبة متعددة اللغات.'
const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
speechConfig.speechSynthesisVoiceName = 'ar-SA-HamedNeural';
export const texttospeech = async function (text: string) {
    return new Promise<ArrayBuffer>(async function (resolve: any, reject) {
        synthesizer.speakTextAsync(' الحاسوبية، الخطوط', res => {
            let bufferstreamOut = new PassThrough();

            if (res.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                const { audioData } = res;
                synthesizer.close();
                bufferstreamOut.end(Buffer.from(audioData));
                console.log('bufferStreamout 111111 ');
                resolve(audioData);
            }
            else {
                console.error("Speech synthesis canceled, " + res.errorDetails +
                    "\nDid you set the speech resource key and region values?");
                reject(null);
            }
            synthesizer.close();
        })
    })
}

