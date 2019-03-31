FROM python:3.7-alpine
LABEL author = Hiroshi imaamsu
ENV PYTHONNUBUFFERD 1

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir /backend
WORKDIR /backend
COPY ./backend /backend

RUN adduser -D user
USER user

CMD ["python", "manage.py", "runserver", "0.0.0.0", "8000"]