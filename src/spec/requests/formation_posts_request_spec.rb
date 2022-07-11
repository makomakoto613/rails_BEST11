require 'rails_helper'

RSpec.describe "FormationPosts", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/formation_posts/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/formation_posts/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /new" do
    it "returns http success" do
      get "/formation_posts/new"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /edit" do
    it "returns http success" do
      get "/formation_posts/edit"
      expect(response).to have_http_status(:success)
    end
  end

end
