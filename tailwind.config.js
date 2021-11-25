module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {

      
      fontSize: {
          'xxs': '0.625rem',      //  10px                        // 10px        
          '5xxl': '3.25rem',      //  52px
          '3xxl': '2rem',         //  32px
          'xxl': '1.375rem',      //  22px
          '10xl': '16.25rem',      //  260px
      },

    
      lineHeight: {    
        '3.5' : '0.875rem',      // 14 - used on btns     
        '7' : '1.6875rem',       // 27 - used on body p   
        '8.25' : '2.0625rem',    // 33 - used on Titles  
        '11': '3.25rem',         // 52 - used on Titles   
        '12': '4.0625rem',       // 65 - used on Big Titles  

      },

      letterSpacing: {  
        
        'tight': '-0.015625rem',      // -0.25px    
        'x-tight': '-0.028125rem',    // -0.45px
        'xx-tight': '-0.0375rem',     // -0.6px
        'xxx-tight': '-0.046875rem',  // -0.75px;
        
      
      },
  
      colors: {
        sdbGrey:'rgb(68, 76, 97)',  
        sdbBlue: 'rgb(8, 126, 173)',     
        sdbBlack: '#191919',        
        sdbWhite: '#FDFDFD',      
        },

        

    
        spacing: {
          '1.25': '0.3125rem',   //5px 
          '3.6': '0.6875rem',   //11px 
          '3.75': '0.9375rem',   //15px
          '4.5': '1.125rem',      //18px 
          '4.75': '1.1875rem',    //19px 
          '6.25': '1.5625rem',    //25px 
          '7.5': '1.875rem',    //30px
          '8.5': '2.125rem',    //34px
          '12.5': '3.125rem',    //50px  
          '15': '3.75rem',         
          '17.5': '4.375rem',       //70px 
          '23.5': '5.875rem',       //94px 
          '25': '6.25rem',         //100px          
          '26.5': '6.625rem',       //106px 
          '30': '7.5rem',           //120px 
          '32.5': '8.125rem',       //130px 
          '33.5': '8.375rem',       //134px 
          '35': '8.75rem',          //140px  
          '37.5': '9.375rem',       //150px      
          '42.5': '10.625rem',      //170px
          '43.25': '10.8125rem',      //173px
          '44.5': '11.125rem',       //178px 
          '50': '12.5rem',           //200px 
          '52.25': '13.0625rem',     //209px 
          '58.25': '14.5625rem',     //233px 
          '59.5': '14.875rem',      //238px    
          '62.5': '15.625rem',      //250px 
          '69': '17.25rem',         //276px 
          '73.75': '18.4375rem',    //295px 
          '75': '18.75rem',         //300px  
          '79': '19.75rem',         //316px 
          '101.25': '25.3125rem',   //405px 
          '105': '26.25rem',        //420px
          '117.5': '29.375rem',     //470px  
          '132.5': '33.125rem',     //530px                       
          '125': '31.25rem',        //500px   
          '126': '31.5rem',         //504px
          '178.75': '44.6875rem',   //715px 
          '194.75': '48.6875rem',   //779px          
          '140': '35rem',           //560px 
          '163': '40.75rem',        //652px    
          '200': '50rem',           //800px  
          '220': '55rem',           //880px          
          '300': '75rem',
        
          
        },
        maxWidth: {
      
        }
      },

      
      
    
    fontFamily: {      
      'Source-Code-Pro': ['Source Code Pro', 'monospace'],
      'Work-Sans': ['Work Sans', 'sans-serif'],
      'Neuzeit-Grotesk-Bold': ['neuzeit-grotesk', 'sans-serif']
      
    },      
  
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      textColor: ['group-hover'],
      borderRadius: ['hover', 'focus'],
      mixBlendMode: ['hover', 'focus'],
      translate: ['group-hover'],
      opacity: ['group-hover'],
      borderRadius: ['hover', 'group-hover'],
      transform: ['hover', 'group-hover'],
      transitionProperty: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
