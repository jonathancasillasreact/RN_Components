import { Theme } from "@react-navigation/native"

type ThemeAction = 
| {type: 'set_Light_theme' }
| {type: 'set_Dark_ theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;

}

export const lightTheme: ThemeState= {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}


export const darkTheme: ThemeState= {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction ): ThemeState => {
    
    switch (action.type) {
        case 'set_Light_theme':
          return {
              ...lightTheme,
          }  
          
        case 'set_Dark_ theme':
          return {
              ...darkTheme,
          }  
          
    
        default:
            return state;
    }

}