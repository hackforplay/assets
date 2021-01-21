var camera = new Camera(330, 0, 150, 100) // 新しくカメラを作る（X,Y,横幅、縦幅）
camera.target = player // カメラの中心にいるキャラクター（ここではプレイヤー）
camera.border = true // カメラのワク線を表示する
camera.zoom(0.1) // カメラのズーム（小さくすると、より広い範囲を表示できる）
