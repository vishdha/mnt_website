# -*- coding: utf-8 -*-
from __future__ import unicode_literals

app_name = "mnt_website"
app_title = "MN Technique Website"
app_publisher = "MN Technique"
app_description = "MN Technique's online identity."
app_icon = "octicon octicon-globe"
app_color = "#1affa3"
app_email = "support@mntechnique.com"
app_version = "0.0.1"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/mnt_website/css/mnt_website.css"
# app_include_js = "/assets/mnt_website/js/mnt_website.js"

# include js, css files in header of web template
web_include_css = "/assets/css/mnt.min.css"
web_include_js = "/assets/js/mnt.min.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "mnt_website.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "mnt_website.install.before_install"
# after_install = "mnt_website.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "mnt_website.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"mnt_website.tasks.all"
# 	],
# 	"daily": [
# 		"mnt_website.tasks.daily"
# 	],
# 	"hourly": [
# 		"mnt_website.tasks.hourly"
# 	],
# 	"weekly": [
# 		"mnt_website.tasks.weekly"
# 	]
# 	"monthly": [
# 		"mnt_website.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "mnt_website.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "mnt_website.event.get_events"
# }

