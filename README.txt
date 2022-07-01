Trong bài em có sử dụng:
    Custom hook : useValidate dùng để validate input text khi thực hiện chức năng login và signup ở file customInput
    Custom HOC : useCheckConnectInternet dùng để kiểm tra kết nối internet khi sử dụng app
    useCallback:    - ở hàm onLogin trong file loginForm.container.js
                    - onSave trong file ItemRecipe.js
            
    DeviceEventEmitter:  cho CustomModalDimesion Sử dụng ở màn hình Edit Recipes.
    React.memo : ở các component con có sự ảnh hưởng của component cha qua props state : 
