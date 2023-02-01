export const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export const backendURL = "http://192.168.1.6:8000";

export const asset = (src, type) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; 

    if (!src){
        switch (type){
            case 'profile':
                return PF+'logo.png';
            case 'cover':
                return PF+'bg.jpg';
            case 'video': 
                return PF+'videos/nature_video_2.mp4';
            case 'photo':
                return PF+'images/nature1.jpg';
            default:
                return ''; 
        }
    }
    return PF+src;
}

export const dummyPost = {
    _id: 'dummy',
}