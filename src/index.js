import acordeon from "./modules/acordeon";
import one from "./modules/header";
import mask from "./modules/mask";
import popup from "./modules/popup";
import reviewsSlider from "./modules/reviewsSlider";
import sendForm from "./modules/sendForm";
import sliders from "./modules/sliders";
import transparencySlider from "./modules/transparencySlider";

one();
popup();
mask();
sliders();
acordeon();
transparencySlider();
reviewsSlider();
sendForm({
    formId: 'feedback1',
});
sendForm({
    formId: 'feedback2',
});
sendForm({
    formId: 'feedback3',
});
sendForm({
    formId: 'feedback4',
});
sendForm({
    formId: 'feedback5',
});
sendForm({
    formId: 'feedback6',
});