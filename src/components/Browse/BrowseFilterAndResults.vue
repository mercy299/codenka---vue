<template>
    <section class="filter-and-result">
      <div class="filter">
        <div>
          <div class="categories-dropdown">
            <div>Filters</div>
            <div class="categories-dropdown-drop">✕</div>
          </div>
          <br/>
          <div class="categories-dropdown-grey">
            <div>Categories</div>
            <div class="categories-dropdown-drop">
              <img
                src="@/assets/img/checkboxes-dropdown.svg"
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <br/>
          <form class="form1">
            <div class="categories-dropdown">
              <label for="all">All</label>
              <input
                class="categories-dropdown-drop"
                type="checkbox"
                id="all"
                name="all"
                value="all"
              />
            </div> <br />
            <div class="categories-dropdown">
              <label for="photos">Photos</label>
              <input
                class="categories-dropdown-drop"
                type="checkbox"
                id="photos"
                name="photos"
                value="photos"
                checked
              /> </div> <br />
            <div class="categories-dropdown">
              <label for="templates">Templates</label>
              <input
                class="categories-dropdown-drop"
                type="checkbox"
                id="templates"
                name="templates"
                value="templates"
              /> </div> <br />
            <div class="categories-dropdown">
              <label for="uikits">UI Kits</label>
              <input
                class="categories-dropdown-drop"
                type="checkbox"
                id="uikits"
                name="uikits"
                value="uikits"
              />
            </div> <br />
          </form>
        </div>
        <div>
          <div class="categories-dropdown-grey">
            <div>Price Range</div>
            <div class="categories-dropdown-drop">
              <img
                src="@/assets/img/checkboxes-dropdown.svg"
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <br>
          <form>
            <div class="categories-dropdown">
            <label for="free">Free</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="free"
              name="free"
              value="free"
            />
          </div>
            <br />
            <div class="categories-dropdown">
            <label for="$1s">$1 - $10</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="$1"
              name="$1"
              value="$1"
              checked
            /> </div> <br />
            <div class="categories-dropdown">
            <label for="$11">$11 -$20</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="$11"
              name="$11"
              value="$11"
            /> </div> <br />
            <div class="categories-dropdown">
            <label for="$20">$20 - $40</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="$20"
              name="$20"
              value="$20"
            /> </div>
            <br />
          </form>
        </div>
        <div>
          <div class="categories-dropdown-grey" >
            <div>File Type</div>
            <div class="categories-dropdown-drop">
              <img
              src="@/assets/img/checkboxes-dropdown.svg"
              alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <br>
          <form>
            <div class="categories-dropdown">
            <label for=".PSD">.PSD</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id=".PSD"
              name=".PSD"
              value=".PSD"
            />
            </div>
            <br />
          <div class="categories-dropdown">
            <label for=".FIG">.FIG</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id=".FIG"
              name=".FIG"
              value=".FIG"
              checked
            /></div> <br />
          <div class="categories-dropdown">
            <label for=".SVG">.SVG</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id=".SVG"
              name=".SVG"
              value=".SVG"
            /></div> <br />

          <div class="categories-dropdown">
            <label for=".XD">.XD</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id=".XD"
              name=".XD"
              value=".XD"
            />
          </div> <br />
          </form>
        </div>
        <div>
          <div class="categories-dropdown-grey">
            <div>Software Type</div>
            <div class="categories-dropdown-drop">
              <img
                src="@/assets/img/checkboxes-dropdown.svg"
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <br>
          <form>
            <div class="categories-dropdown">
            <label for="figma">FIGMA</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="figma"
              name="figma"
              value="figma"
            /> </div>
            <br />
            <div class="categories-dropdown">
            <label for="adobe">ADOBE XD</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="adobe"
              name="adobe"
              value="adobe"
              checked
            /> </div> <br />
            <div class="categories-dropdown">
            <label for="sketch">SKETCH</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="sketch"
              name="sketch"
              value="sketch"
            /> </div> <br />
            <div class="categories-dropdown">
            <label for="invision">INVISION</label>
            <input
              class="categories-dropdown-drop"
              type="checkbox"
              id="invision"
              name="invision"
              value="invision"
            /> </div>
            <br />
          </form>
          <div class="categories-dropdown-grey">
            <div>Properties</div>
            <div class="categories-dropdown-drop">
              <img
                src="@/assets/img/checkboxes-dropdown.svg"
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <div class="categories-dropdown-reset-filters">
            Reset Filters
          </div>
        </div>
      </div>
      <div class="filter-and-result-cards">
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btns">10$</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btns">10$</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btns">10$</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btns">10$</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btns">10$</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btns">10$</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-and-result-card-item">
          <div class="filter-and-result-card-item-center">
            <div class="filter-and-result-card-item-grey-area">
              <button class="filter-and-result-card-item-grey-area-btn">Free</button>
            </div>
            <div class="filter-and-result-card-item-grey-area-text">
              <div class="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_heart.svg" />
                <div>205</div>
              </div>
              <div class="filter-and-result-card-item-grey-area-grey-icon">
                <img src="@/assets/img/bi_download.svg" />
                <div>1,114</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="pagination">
      <p>1 2 3 4 ... 10</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.filter-and-result{
    /* width: 90%; */
    /* margin: auto; */
    /* background-color: rgb(248, 249, 255); */
    display: flex;
    padding: 30px;
}
.filter-and-result .filter {
    width: 20%;
}
.filter-and-result-cards{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 30px;
}
.filter-and-result-card-item{
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    height: 336px;
    /* padding: 0.2em; */
    margin: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    justify-items: center;
}
.filter-and-result-card-item-grey-area{
    background-color: rgba(251, 251, 251, 1);
    display: flex;
    justify-content: right;
    /* justify-self: center; */
    width: 320px;
    height: 244px;
    /* border: 1px solid red; */
}
.filter-and-result-card-item-grey-area-grey-icon{
    color: rgba(170, 183, 191, 1);
}
.filter-and-result-card-item-grey-area-btn{
    background-color: rgba(34, 176, 46, 1);
    color: white;
    height: max-content;
    padding: 0.6em 1em;
    margin: 1em;
    border: none;
    border-radius: 9px;
}
.filter-and-result-card-item-grey-area-btn-img{
    display: flex;
    align-items: flex-end;
    padding: 0 170px 0px 0;
}
/* .small-wahala{
    display: flex;
    align-items: flex-end;
    padding: 0 180px 0px 0;
} */
.filter-and-result-card-item-grey-area-btns{
    background-color: rgba(255, 217, 101, 1);
    color: white;
    height: max-content;
    padding: 0.6em 1em;
    margin: 1em;
    border: none;
    border-radius: 9px;
}
.filter-and-result-card-item-grey-area-text{
    display: flex;
    gap: 40px;
    padding-top: 1em;
    text-align: center;
    /* justify-content: center; */
}
.p{
    color: rgba(2, 48, 89, 1);
}
.filter-and-result-card-item-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.categories-dropdown{
    display: flex;
    /* width: 280px; */
}
.categories-dropdown-grey{
    display: flex;
    background-color:#FBFBFB ;
}
/* .form1{
    width: 80px;
} */
.categories-dropdown-drop{
    margin-left: auto;
}
.categories-dropdown-reset-filters{
    background-color:#FBFBFB ;
    margin-top: 30px;
}
input[type=checkbox]{
    /* margin-left: auto; */
    padding-left: auto;

}
input{
    padding-right: auto;
}
.pagination{
    color: rgb(3, 76, 188);
    text-align: center;
    height: 100px;
    margin-top: 5%;
}
</style>