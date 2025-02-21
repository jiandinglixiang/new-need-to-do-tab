console.log('This is the background page.');
console.log('Put the background scripts here.');
      chrome.notifications.create(
        'update_notification',
        {
          type: 'basic',
          iconUrl: 'logo.png', // 您扩展的图标
          title: '扩展已更新',
          message: '您的扩展已经成功更新到最新版本，',
        },
        function (id) {
          console.log('Notification ID:', id)
        }
      )