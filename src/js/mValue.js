function aa(mValue){
	mValue = input.value.replace(/\D/g,'');
	if (mValue != '') {
		var mLength = mValue.length;
		if (mLength <= 3) {
			return mValue;
		} else {
			if (mLength <= 7) {
				return mValue.substring(0, 3) + ' ' + mValue.substring(3, mLength)
			} else {
				return mValue.substring(0, 3) + ' ' + mValue.substring(3, 7) + ' ' + mValue.substring(7, 11)
			}
		}
	}
}