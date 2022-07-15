
/*
    ** Creat by DAA 
    ** 2022/6/20 11:34 AM

*/
    // ## Function Show MessageConfig 
    // ## var light for type Icon and Color 
    // G for Succsess and color green
    // R for Error and color Red
    // Y for config and color yallow 
    // ## var message for write your massege
    function MessageConfig(light , message) { 
        let backgroundMessageConfigStyle=`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;left: 0;
            z-index: 999;
            background:#0000006b;
            `,
        MessageConfigStyle =`
            z-index: 9999;
            width: 250px;
            height: 200px;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: var(--tran-04);
            transform: translate(-50%,-50%);
            box-shadow: 0 0 10px rgb(0 0 0 / 10%);
            overflow: hidden;
            text-align: center;
            background: #fff;
            border-radius: 5px;
            padding:3em 2em;
            `,
        MessageConfigBtnStyle = `
            position: relative;
            font-size: 1em;
            color: #fff;
            background: #0086E5;
            width: 50%;
            padding: 0.8em 0em;
            outline: none;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            border-bottom: 3px solid #045B99;
            display: block;
            margin: 1.5em auto 0;
            `,
        BtnJs = `
            let MessageConfig = document.querySelector('.MessageConfig'),
            backgroundMessageConfig = document.querySelector('.backgroundMessageConfig');
            MessageConfig.remove()
            backgroundMessageConfig.remove()
            `,
        icon=``;
        if (light == 'G'){icon=`
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#64BC26" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>`} 
        else if(light == 'R'){icon=`
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#EA1601" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>`}
        else if(light == 'Y'){icon=`
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#FAD202" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>`}
        else{return `Error : Color Not Found!!`}
        let body = document.querySelector('body');
        body.innerHTML += `
        <div class="MessageConfig" style="${MessageConfigStyle}">    
            ${icon}
            <p>${message}</p>
            <button class="MessageConfigBtn"style="${MessageConfigBtnStyle}" onclick="${BtnJs}">Ok</button>
        </div>
        <div class="backgroundMessageConfig" style="${backgroundMessageConfigStyle}"></div>`;
    }