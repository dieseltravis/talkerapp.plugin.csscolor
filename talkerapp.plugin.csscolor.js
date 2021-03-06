﻿plugin.cssColor = {
	matcher: /\s*((?:\#(?:[\da-f]{6}|[\da-f]{3})|(?:hsl|rgb)a?\(\d+%?(?:\s*,\s*\d+%?){2}(?:\s*,\s*\d?\.?\d+)?\));?)/gi,
    replacement: ' $1<span style="display:inline-block;position:relative;top:2px;margin:0 2px;width:16px;height:16px;outline:solid 1px #000;background-color:$1">&#160;</span>'
};

//TODO: support named colors?

plugin.onMessageInsertion = function (event) {
	var element = Talker.getLastInsertion();
	element.replace(plugin.cssColor.matcher, plugin.cssColor.replacement);
};