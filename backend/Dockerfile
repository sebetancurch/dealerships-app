FROM Python:3.13-alpine
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY ./dealership_api /app/dealership_api
EXPOSE 8000
CMD ["python", "dealership_api/manage.py", "runserver", "0.0.0.0:8000"]