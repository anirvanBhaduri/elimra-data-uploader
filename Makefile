info: usage

PWD := $(shell pwd)

usage:
	@echo " make build              Build dependencies."
	@echo " make run                Start the script."

build: do_build
run: do_run

do_build:
	virtualenv .virtualenv
	source .virtualenv/Scripts/activate
	pip install -r requirements.txt

do_run:
	source .virtualenv/Scritps/activate
	py main.py