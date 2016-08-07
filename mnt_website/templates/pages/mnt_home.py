# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals

no_sitemap = 1
no_cache = 1
base_template_path = "frappe/templates/base.html"

import os, re
import frappe
from frappe import _
import frappe.sessions

def get_context(context):
	pass