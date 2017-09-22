require 'sinatra'

get '/' do

erb :index
end

get '/sidebar' do

erb :sidebar
end

get '/errorPage' do

erb :notfound
end