
export const showView = (number) => {
    return {
        type: 'CHANGE_VIEW',
        payload: number
    }
};

export const showSkillsEnable = () => {
    return {
        type: 'SHOW_SKILLS'
    }
};
