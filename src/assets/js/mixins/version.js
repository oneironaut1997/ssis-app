export default {
	methods: {
		checkVersion(data) {
			let version = '0.0.1';
			let message = null;
			
			if (this.isCordova) {
				switch (device.platform) {
					case 'iOS':
					case 'Mac OS X':
							version = data.versions.ios.minimum_version;
							message = data.versions.ios.message;
						break;
					case 'Android':
					default:
							version = data.versions.android.minimum_version;
							message = data.versions.android.message;
						break;
				}
			} else {
				version = data.versions.android.minimum_version;
				message = data.versions.android.message;
			}

			if (this.isMinimumVersion(version)) {
				if (!message) {
					message = 'Your App is outdated please download latest version!';
				}

				this.$alert.error(message, 'App Outdated', { persistent: true })
				.then(response => {
					navigator.app.exitApp();
				});
			}
		},

		isMinimumVersion(minimumVersion) {
			const splitMinimumVersion = minimumVersion.split('.');
			const splitCurrentVersion = this.app_device.version.split('.');

			const maxLen = Math.max(splitMinimumVersion.length, splitCurrentVersion.length);

			let minimumVersionParts, currentVersionParts, cmp = 0;

			for(var i = 0; i < maxLen && !cmp; i++) {
				minimumVersionParts = parseInt(splitMinimumVersion[i], 10) || 0;
				currentVersionParts = parseInt(splitCurrentVersion[i], 10) || 0;

				if(minimumVersionParts < currentVersionParts)
					cmp = 1;

				if(minimumVersionParts > currentVersionParts)
					cmp = -1;
			}

			return eval('0' + '>' + cmp);
		}
	}
}